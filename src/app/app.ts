import { Component, signal, SimpleChange } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Singup } from './singup/singup';

@Component({
  selector: 'app-root',
  // imports: [Login, Singup],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count = 0;
  decrement() {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    alert('counter can be negative');
  }
  increment() {
    this.count++;
  }
  reset() {
    this.count = 0;
    alert('are you sure!');
  }
}
