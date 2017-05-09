import React from 'react';
import AddTodo from '../containers/AddTodo';
import FilteredTodoList from '../containers/FilteredTodoList';
import Footer from './Footer';

export default function App () {
    return (
        <div>
            <AddTodo />
            <FilteredTodoList />
            <Footer />
        </div>
    );
}