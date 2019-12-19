import { createSelector, createFeatureSelector } from '@ngrx/store';

import  TodoState  from './todo.model';

export const todoSelector = createFeatureSelector<TodoState>('todo'); // appModule-s reducer
export const getTodoSelector = createSelector(todoSelector, (state: TodoState) => state.name); // array-a