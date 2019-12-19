import { createAction, props } from '@ngrx/store';
import  TodoState  from './todo.model';

export const GetTodoAction = createAction( '[Todo] - Get Todo');
export const AddTodoAction = createAction( '[Todo] - Add Todo' , props< {name}>() ); // name: string
export const RemoveTodoAction = createAction('[Todo] - Remove Todo', props< {index}>() );



