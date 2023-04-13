import {create} from 'zustand';

export const useTodoStore = create((set) => ({
    todos: [
        {
            id: 1,
            title: 'Learn React',
            done: false,
        },
        {
            id: 2,
            title: 'Learn Zustand',
            done: false,
        },
        {
            id: 3,
            title: 'Learn Router',
            done: false,
        },
    ],
    addTodo: (todo) => set((state) => ({todos: [todo, ...state.todos]})),
    removeTodo: (id) => set((state) => ({todos: state.todos.filter((todo) => todo.id !== id)})),
    doneTodo: (id) => set((state) => ({todos: state.todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo)})),
}));