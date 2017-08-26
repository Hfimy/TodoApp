import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes'

let nextTodoId = 0

export const add_todo = (text) => ({
    type: ADD_TODO,
    text: text,
    completed: false,
    id: nextTodoId++
})

export const toggle_todo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})

export const remove_todo = (id) => ({
    type: REMOVE_TODO,
    id: id
})