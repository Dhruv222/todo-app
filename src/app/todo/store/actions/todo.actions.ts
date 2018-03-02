import { Action } from '@ngrx/store';
import { Todo, TodoError } from '../../models/todo.models';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum TodoActionTypes {
  GET_TODOS = '[Todo] GET_TODOS',
  GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS',
  GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR',
  CREATE_TODO = '[Todo] CREATE_TODO',
  CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS',
  CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR',
  DELETE_TODO = '[Todo] DELETE_TODO',
  DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS',
  DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class GetTodos implements Action {
  readonly type = TodoActionTypes.GET_TODOS;
}

export class GetTodosSuccess implements Action {
  readonly type = TodoActionTypes.GET_TODOS_SUCCESS;

  constructor(public payload: Todo[]) {}
}

export class GetTodosError implements Action {
  readonly type = TodoActionTypes.GET_TODOS_ERROR;

  constructor(public payload: TodoError) {}
}

export class CreateTodo implements Action {
  readonly type = TodoActionTypes.CREATE_TODO;

  constructor(public payload: Todo) {}
}

export class CreateTodoSuccess implements Action {
  readonly type = TodoActionTypes.CREATE_TODO_SUCCESS;

  constructor(public payload: Todo) {}
}

export class CreateTodoError implements Action {
  readonly type = TodoActionTypes.CREATE_TODO_ERROR;

  constructor(public payload: TodoError) {}
}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DELETE_TODO;

  constructor(public payload: number) {}
}

export class DeleteTodoSuccess implements Action {
  readonly type = TodoActionTypes.DELETE_TODO_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteTodoError implements Action {
  readonly type = TodoActionTypes.DELETE_TODO_ERROR;

  constructor(public payload: TodoError) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TodoActions =
  | GetTodos
  | GetTodosError
  | GetTodosSuccess
  | CreateTodo
  | CreateTodoError
  | CreateTodoSuccess
  | DeleteTodo
  | DeleteTodoError
  | DeleteTodoSuccess;
