import React from 'react';
import AddTodo from './AddTodo';
import FilteredTodoList from './FilteredTodoList';
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