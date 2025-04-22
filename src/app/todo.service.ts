import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    {id: 1, title: "Learn Angular", completed: false},
    {id: 2, title: "Create my awesome app", completed: false}
  ];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string) {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title,
      completed: false,
    };

    this.todos.push(newTodo);
  }
  
  toggleTodo(id: number) {
    const todo = this.todos.find(todo => todo.id === id);

    if (todo) {
      todo.completed = !todo.completed; 
    }
  }
  
}
