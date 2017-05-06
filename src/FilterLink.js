import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from './Link';

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;

function mapStateToProps (state, props) {
    return {
        active: props.filter === state.filter
    }
}

function mapDispatchToProps (dispatch, props) {
    return {
        onClick: () => {
            dispatch({
                type: 'SET_FILTER',
                filter: props.filter
            });
        }
    }
}