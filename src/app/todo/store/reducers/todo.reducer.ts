import * as TodoActions from '../actions/todo.actions';
import { Todo, TodoError } from '../../models/todo.models';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
  todos: Todo[];
  loading: boolean;
}

const initialState: State = {
  todos: [],
  loading: false,
};

export function TodoReducer(
  state = initialState,
  action: TodoActions.TodoActions,
): State {
  switch (action.type) {
    case TodoActions.TodoActionTypes.GET_TODOS: {
      return {
        ...state,
        loading: true,
      };
    }

    case TodoActions.TodoActionTypes.GET_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: [...action.payload],
      };
    }

    case TodoActions.TodoActionTypes.GET_TODOS_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case TodoActions.TodoActionTypes.CREATE_TODO: {
      return {
        ...state,
        loading: true,
      };
    }

    case TodoActions.TodoActionTypes.CREATE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: [
          ...state.todos,
          {
            ...action.payload,
          },
        ],
      };
    }

    case TodoActions.TodoActionTypes.CREATE_TODO_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case TodoActions.TodoActionTypes.DELETE_TODO: {
      return {
        ...state,
        loading: true,
      };
    }

    case TodoActions.TodoActionTypes.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: state.todos.filter((element) => {
          return element.id !== action.payload;
        }),
      };
    }

    case TodoActions.TodoActionTypes.DELETE_TODO_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Selectors
 */

export const getTodosState = createFeatureSelector<State>('todo-app');

export const getTodos = createSelector(
  getTodosState,
  (state: State) => state.todos,
);
