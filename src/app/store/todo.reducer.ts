import TodoState from './todo.model';
import * as TodoActions from './todo.actions';
import {Action, createReducer, on } from '@ngrx/store';

export const initialState: TodoState = {
    isLoaded: false,
    name: ['elene'],
    error: null
};

const _todoReducer = createReducer(
    initialState,
    on(TodoActions.GetTodoAction, (state: TodoState) => {
        return state
    }),
    on(TodoActions.AddTodoAction, (state : TodoState, {name} ) => {
        let payload = {name: state.name} // kodis dawera
        payload.name.push(name)
        return {...state, ...payload}; // dzvel da axal damatebulsac abrunebs
    }),
    on(TodoActions.RemoveTodoAction, (state: TodoState, {index} ) => {
        let payload = {name: state.name}
        state.name.splice(index, 1)
        return state;
    })

);

export function toDoReducer(state: TodoState, action: Action) {
 return _todoReducer(state, action);
}


