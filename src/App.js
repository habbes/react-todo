import React from 'react';
import AddTodo from './AddTodo';
import FilteredTodoList from './FilteredTodoList';
import Footer from './Footer';

export default function App ({ store }) {
    return (
        <div>
            <AddTodo store={store} />
            <FilteredTodoList store={store} />
            <Footer store={store} />
        </div>
    );
}