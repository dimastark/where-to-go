import React, { PureComponent } from 'react';

import { IPlace, ITag } from '../../../shared/places-api';
import { Avatar, Card, CardHeader, CardMedia, CloseIcon, FavouriteIcon, IconButton } from '../material';

import staticMapUrl from '../../services/static-map-url';
import Tag from './Tag';

import './Place.css';

interface IBaseProps extends IPlace {
    isFavourite: boolean;
    geolocation?: {
        latitude: number,
        longitude: number,
    };
    tags: ITag[];
    withMap: boolean;
}

export interface IClosableProps extends IBaseProps {
    closable: true;
    deleteFavourite: (id: string) => void;
}

export interface ILikeableProps extends IBaseProps {
    closable: false;
    addFavourite: (place: IPlace) => void;
    deleteFavourite: (id: string) => void;
}

export class Place extends PureComponent<IClosableProps | ILikeableProps> {
    static defaultProps = {
        isFavourite: false,
        tags: [],
        withMap: false,
    };

    render() {
        const { geolocation, withMap } = this.props;

        return (
            <Card className="place">
                <CardHeader
                    avatar={this.avatar}
                    title={this.header}
                    subheader={this.subheader}
                    action={this.action}
                />

                <div className="place__tags">
                    {this.tags.map(tag => (
                        <Tag key={tag.id} {...tag}/>
                    ))}
                </div>

                {withMap && geolocation ? (
                    <CardMedia
                        className="place__map"
                        image={this.mapImgUrl}
                    />
                ) : null}
            </Card>
        );
    }

    handleLike = () => {
        if (!this.props.closable) {
            const { isFavourite, addFavourite, deleteFavourite, ...rest } = this.props as ILikeableProps;
            const { closable, withMap, geolocation, ...place } = rest;

            if (isFavourite) {
                deleteFavourite(place.id);
            } else if (addFavourite) {
                addFavourite(place);
            }
        }
    }

    handleDelete = () => {
        const { id, deleteFavourite } = this.props;

        deleteFavourite(id);
    }

    get avatar() {
        const { icon } = this.props;

        return <Avatar src={icon}/>;
    }

    get action() {
        const { closable, isFavourite } = this.props;

        if (closable) {
            return (
                <IconButton onClick={this.handleDelete}>
                    <CloseIcon/>
                </IconButton>
            );
        }

        return (
            <IconButton onClick={this.handleLike}>
                <FavouriteIcon color={isFavourite ? 'primary' : 'inherit'}/>
            </IconButton>
        );
    }

    get header() {
        return this.props.title;
    }

    get subheader() {
        const { distance, vicinity } = this.props;

        return `${vicinity.replace(/\d{6}/, '')} ${distance} метров`;
    }

    get tags() {
        const { category, openingHours } = this.props;
        const tags = this.props.tags.slice();

        tags.push(category);

        if (openingHours) {
            tags.push({
                id: openingHours.isOpen ? 'open' : 'close',
                title: openingHours.isOpen ? 'Открыто' : 'Закрыто',
            });
        }

        return tags;
    }

    get mapImgUrl() {
        const [latitude, longitude] = this.props.position;

        return staticMapUrl({
            from: this.props.geolocation!,
            to: { latitude, longitude },
        });
    }
}
