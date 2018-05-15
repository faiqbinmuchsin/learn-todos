import type from './type';

let todoId = 0;

const addTodo = text => ({
    type: type.ADD_TODO,
    id: todoId++,
    text
})

const toggleTodo = id => ({
    type: type.TOGGLE_TODO,
    id
})

export default {
    addTodo,
    toggleTodo
};