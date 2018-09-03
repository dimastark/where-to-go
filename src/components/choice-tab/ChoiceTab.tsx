import React, { PureComponent } from 'react';

import { Button } from 'components/material';
import { IPlace, IPlacesQuery } from 'shared/places-api';
import { IFavouritesState } from 'store/reducers/favourites';
import { IGeolocationState } from 'store/reducers/geolocation';
import { IPlacesState } from 'store/reducers/places';

import ErrorTab from 'components/error-tab';
import Place from 'components/place';
import SpinTab from 'components/spin-tab';

import './ChoiceTab.css';

export interface IDispatchFromProps {
    addFavourite: (place: IPlace) => void;
    choicePlace: (places?: IPlace[]) => void;
    deleteFavourite: (id: string) => void;
    requestPlaces: (query: IPlacesQuery) => void;
    requestPosition: () => void;
}

export interface IStateFromProps {
    favourites: IFavouritesState;
    geolocation: IGeolocationState;
    places: IPlacesState;
}

export interface IProps extends IStateFromProps, IDispatchFromProps {
}

export class ChoiceTab extends PureComponent<IProps> {
    componentDidMount() {
        const { geolocation: { position, isPending, error } } = this.props;

        if (!position && !isPending && !error) {
            this.props.requestPosition();
        }
    }

    componentDidUpdate(prevProps: IProps) {
        const { geolocation: { position }, places: { byId, isPending, error } } = this.props;

        if (position && !byId && !isPending && !error) {
            const { latitude, longitude } = position.coords;

            this.props.requestPlaces({ latitude, longitude });
        }
    }

    render() {
        const { addFavourite, deleteFavourite, geolocation, places } = this.props;

        if (geolocation.error) {
            return <ErrorTab description="Ошибка получения геолокации."/>;
        }

        if (places.error) {
            return <ErrorTab description="Ошибка получения ближайших мест." />;
        }

        if (!geolocation.position || geolocation.isPending || !places.byId || places.isPending) {
            return <SpinTab/>;
        }

        const { coords } = geolocation.position;
        const { selectedPlace } = places;

        return (
            <div className="choice-tab">
                <div className="choice-tab__buttons">
                    <Button
                        className="choice-tab__choice-all"
                        color="primary"
                        size="small"
                        variant="outlined"
                        onClick={this.handleChoiceAll}
                    >
                        Выбрать из всех
                    </Button>
                    <Button
                        color="primary"
                        disabled={!this.hasFavourites}
                        size="small"
                        variant="outlined"
                        onClick={this.handleChoiceFavourite}
                    >
                        Выбрать из избранного
                    </Button>
                </div>
                <div className="choice-tab__place">
                    {selectedPlace ? (
                        <Place
                            {...selectedPlace}
                            isFavourite={this.favouritesIds.includes(selectedPlace.id)}
                            deleteFavourite={deleteFavourite}
                            addFavourite={addFavourite}
                            geolocation={coords}
                            closable={false}
                            withMap={true}
                        />
                    ) : null}
                </div>
            </div>
        );
    }

    handleChoiceAll = () => {
        this.props.choicePlace();
    }

    handleChoiceFavourite = () => {
        const { favourites } = this.props;

        this.props.choicePlace(favourites.items || []);
    }

    get favouritesIds() {
        const { favourites } = this.props;

        return (favourites.items || [])
            .map((place) => place.id);
    }

    get hasFavourites() {
        const { favourites } = this.props;

        return Boolean((favourites.items || []).length);
    }
}
