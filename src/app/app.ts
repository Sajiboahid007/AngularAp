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
  name='';
  showName = '';
  mail='';
  public getValue(event:Event){
    this.name = (event.target as HTMLInputElement).value
  }
  public displayName(){
  this.showName = this.name
  }
  public email(value:string){
    this.mail = value
  }
}
