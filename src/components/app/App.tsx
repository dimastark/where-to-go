import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Error from 'components/error';
import Place from 'components/place';
import Spin from 'components/spin';
import { IMapLocation } from 'services/api/places';
import { requestPosition } from 'store/actions/geolocation';
import { requestPlaces } from 'store/actions/places';
import { IRootState } from 'store/reducers';

import './App.css';

function choice<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

interface IDispatchFromProps {
    requestPosition: () => void,
    requestPlaces: (location: IMapLocation) => void,
}

type Props = IRootState & IDispatchFromProps;

class App extends PureComponent<Props> {
    componentDidMount() {
        this.props.requestPosition();
    }

    componentDidUpdate(prevProps: Props) {
        const { geolocation, places } = this.props;

        if (!geolocation.position && !geolocation.isPending && !geolocation.error) {
            this.props.requestPosition();
        }

        if (geolocation.position && !places.byId && !places.isPending && !places.error) {
            const { latitude, longitude } = geolocation.position.coords;

            this.props.requestPlaces({ latitude, longitude });
        }
    }

    render() {
        const { geolocation, places } = this.props;

        if (!geolocation.position || geolocation.isPending) {
            return <Spin/>;
        }

        if (geolocation.error) {
            return <Error description="Ошибка получения геолокации."/>;
        }

        if (!places.byId || places.isPending) {
            return <Spin/>;
        }

        if (places.error) {
            return <Error description="Ошибка получения ближайших мест." />;
        }

        const placeId = choice(places.unusedIds);
        const place = places.byId[placeId];

        return (
            <div className="app">
                 <Place {...place} position={geolocation.position.coords} />
            </div>
        );
    }
}

const mapStateToProps = (state: IRootState) => state;

const mapDispatchToProps = {
    requestPlaces,
    requestPosition,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
