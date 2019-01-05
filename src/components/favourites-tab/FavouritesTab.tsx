import React, { PureComponent } from 'react';

import { IFavouritesState } from '../../store/reducers/favourites';

import Place from '../place';
import SpinTab from '../spin-tab';

import './FavouritesTab.css';

export interface IStateFromProps {
    favourites: IFavouritesState;
}

export interface IDispatchFromProps {
    deleteFavourite: (id: string) => void;
    getFavourites: () => void;
}

export interface IProps extends IStateFromProps, IDispatchFromProps {
}

export class FavouritesTab extends PureComponent<IProps> {
    componentDidMount() {
        const { favourites } = this.props;

        if (!favourites.items) {
            this.props.getFavourites();
        }
    }

    render() {
        const { deleteFavourite, favourites } = this.props;

        if (!favourites.items) {
            return <SpinTab/>;
        }

        return (
            <div className="favourites-tab">
                {favourites.items.map(place => (
                    <Place
                        key={place.id}
                        {...place}
                        closable={true}
                        deleteFavourite={deleteFavourite}
                    />
                ))}
            </div>
        );
    }
}
