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

  display = false;
  togglebtn = true;
   
  public hide(){
    this.display = false
  }
  public show(){
    this.display = true
  }

  public toggle(){
    this.display=!this.display;
  }

  public showBtn (){
      this.togglebtn = !this.togglebtn;
  }
}

