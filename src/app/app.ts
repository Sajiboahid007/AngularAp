import { Component, computed, signal, SimpleChange } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Singup } from './singup/singup';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  // imports: [Login, Singup],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
    firstValue = signal(20);
    secondValue = signal(30);
    result = computed (()=> this.firstValue() + this.secondValue());

    showValue(){
      console.log(this.result());
      this.firstValue.set(50);
      console.log(this.result())
    }
}
