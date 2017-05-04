let nextId = 1;

export function generateId () {
    return nextId++;
}

export function createTodo (text) {
    const id = nextId;
    nextId += 1;
    return {
        id,
        text,
        completed: false
    };
}

export function filterTodos (todos, filter) {
    return todos.filter(t => 
        (filter === 'SHOW_ALL')
        || (filter === 'SHOW_COMPLETED' && t.completed)
        || (filter === 'SHOW_ACTIVE' && !t.completed)
    );
}