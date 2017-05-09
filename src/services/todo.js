export { v4 as generateId } from 'node-uuid';

export function filterTodos (todos, filter) {
    return todos.filter(t => 
        (filter === 'SHOW_ALL')
        || (filter === 'SHOW_COMPLETED' && t.completed)
        || (filter === 'SHOW_ACTIVE' && !t.completed)
    );
}