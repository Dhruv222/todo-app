export interface Todo {
  id: number;
  text: string;
  due_on: number;
}

export interface TodoError {
  message: string;
  error: Object;
}
