import { connect } from 'react-redux';

import { deleteFavourite, getFavourites } from '../../store/actions/favourites';
import { IRootState } from '../../store/reducers';
import { FavouritesTab, IDispatchFromProps, IStateFromProps } from './FavouritesTab';

const mapStateToProps = (state: IRootState) => ({
    favourites: state.favourites,
});

const mapDispatchToProps = {
    deleteFavourite,
    getFavourites,
};

export default connect<IStateFromProps, IDispatchFromProps, {}, IRootState>(
    mapStateToProps,
    mapDispatchToProps,
)(FavouritesTab);
