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
    color = 'red';

    public handleColor(value:string){
      this.color = value;
    }
}
