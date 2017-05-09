import { connect } from 'react-redux';
import { setFilter } from '../services/actions';
import Link from '../components/Link';

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;

function mapStateToProps (state, props) {
    return {
        active: props.filter === state.filter
    }
}

function mapDispatchToProps (dispatch, props) {
    return {
        onClick() {
            dispatch(setFilter(props.filter));
        }
    }
}