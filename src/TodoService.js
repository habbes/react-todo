let nextId = 1;

export function createTodo (text) {
    const id = nextId;
    nextId += 1;
    return {
        id,
        text,
        completed: false
    };
}