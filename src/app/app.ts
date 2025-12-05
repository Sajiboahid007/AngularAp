import { Component, signal, SimpleChange } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Singup } from './singup/singup';
import { FormsModule } from '@angular/forms';

interface ToDo {
  id: number, doList: string
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})



export class App {
  task = '';
  toDoList: ToDo[] = [];

  taskList() {
    this.toDoList.push({ id: this.toDoList.length + 1, doList: this.task });
    this.task = '';
  }

  removeByForLoop(id: number) {
    let todo: ToDo[] = [];
    for (let index = 0; index < this.toDoList.length; index++) {
      const element = this.toDoList[index];
      if (element.id === id) {
        continue;
      }
      todo.push(element);
    }

    this.toDoList = todo;
  }

  delete(id: number) {
    // this.toDoList.
    //this.removeByForLoop(id);
    this.toDoList = this.toDoList.filter( item => item.id !== id);

    // this.toDoList = this.toDoList.filter((item) => {
    //   return item.id !== id;
    // })
  }
}
