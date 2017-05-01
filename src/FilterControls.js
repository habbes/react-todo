import React from 'react';
import FilterLink from './FilterLink';

export default function FilterControls ({onFilter, currentFilter}) {
    return (
        <div>
            Show:
            {' '}
            <FilterLink filter="SHOW_ALL" onClick={onFilter} 
                currentFilter={currentFilter}>All</FilterLink>
            {' '}
            <FilterLink filter="SHOW_ACTIVE" onClick={onFilter}
                currentFilter={currentFilter}>Active</FilterLink>
            {' '}
            <FilterLink filter="SHOW_COMPLETED" onClick={onFilter}
                currentFilter={currentFilter}>Completed</FilterLink>
        </div>
    );
}