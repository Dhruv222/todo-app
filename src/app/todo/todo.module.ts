import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../ng-material.module';
import { TodoRoutingModule } from './todo.routing';

import { TodoReducer } from './store/reducers/todo.reducer';
import { TodoEffects } from './store/effects/todo.effects';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoService } from './services/todo.services';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent, CreateTodoComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todo-app', TodoReducer),
    EffectsModule.forFeature([TodoEffects]),
    MaterialModule,
    TodoRoutingModule,
    FormsModule,
  ],
  providers: [TodoService],
  exports: [TodoRoutingModule],
})
export class TodoModule {}
