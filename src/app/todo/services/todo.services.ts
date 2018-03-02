import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
  api_url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  GetTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api_url);
  }

  CreateTodos(todo: Todo): Observable<{}> {
    return this.http.post<{}>(this.api_url, {
      id: todo.id,
      text: todo.text,
      due_on: todo.due_on,
    });
  }

  DeleteTodo(id: number) {
    return this.http.delete(this.api_url + `\/${id}`);
  }
}
