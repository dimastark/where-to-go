import React, { PureComponent } from 'react';

import { IPlace } from 'services/api/places';
import staticMapUrl from 'services/static-map-url';

import './Place.css';

type Props = IPlace & {
    position: {
        latitude: number,
        longitude: number,
    },
};

export default class Place extends PureComponent<Props> {
    render() {
        const { lat, lng } = this.props.geometry.location;
        const mapImgUrl = staticMapUrl({
            from: this.props.position,
            to: {
                latitude: lat,
                longitude: lng,
            },
        });

        return (
            <div className="place">
                Идем в {this.props.name}!
                <img className="place-map" src={mapImgUrl}/>
                {/*<pre>*/}
                    {/*{JSON.stringify(this.props, null, 2)}*/}
                {/*</pre>*/}
            </div>
        );
    }
}
