import { Component, effect, signal, SimpleChange } from '@angular/core';
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
 userName = signal('Sajib');
count = signal(0);
 heading = false;

 constructor(){
  effect(()=>{
   if(this.count()==2){
      this.heading=true;
   }else
    this.heading=false
  })
 }

 showHeading(){
  this.count.set(this.count()+1);
 }
}
