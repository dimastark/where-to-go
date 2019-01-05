import { connect } from 'react-redux';

import { setCategory, setRadius } from '../../store/actions/settings';
import { IRootState } from '../../store/reducers';
import { IDispatchFromProps, IStateFromProps, SettingsTab } from './SettingsTab';

const mapStateToProps = (state: IRootState) => ({
    settings: state.settings,
});

const mapDispatchToProps = {
    setCategory,
    setRadius,
};

export default connect<IStateFromProps, IDispatchFromProps, {}, IRootState>(
    mapStateToProps,
    mapDispatchToProps,
)(SettingsTab);
