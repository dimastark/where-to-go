import { connect } from 'react-redux';

import { addFavourite, deleteFavourite } from 'store/actions/favourites';
import { requestPosition } from 'store/actions/geolocation';
import { choicePlace, requestPlaces } from 'store/actions/places';
import { IRootState } from 'store/reducers';
import { ChoiceTab, IDispatchFromProps, IStateFromProps } from './ChoiceTab';

const mapStateToProps = (state: IRootState) => ({
    favourites: state.favourites,
    geolocation: state.geolocation,
    places: state.places,
});

const mapDispatchToProps = {
    addFavourite,
    choicePlace,
    deleteFavourite,
    requestPlaces,
    requestPosition,
};

export default connect<IStateFromProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(ChoiceTab);
