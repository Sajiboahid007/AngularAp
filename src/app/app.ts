import { Component, signal, SimpleChange } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Singup } from './singup/singup';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
name=''
}
