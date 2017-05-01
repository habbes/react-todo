import React from 'react';

export default function FilterControls (props) {

    return (
        <div>
            <button 
                onClick={() => props.onFilter('SHOW_ALL')}>Show All</button>
            <button 
                onClick={() => props.onFilter('SHOW_ACTIVE')}>Show Active</button>
            <button
                onClick={() => props.onFilter('SHOW_COMPLETED')}>Show Completed</button>
        </div>
    );
    
}