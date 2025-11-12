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
    color = 1;

    public handleColor(value:number){
      this.color = value
    }

    public handleInput(event: Event){
      this.color = parseInt((event.target as HTMLInputElement).value)
    }
}
