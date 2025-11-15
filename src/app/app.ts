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
  students =[
    {name:'Sajib',age:23,email:'sajib@gmail'},
    {name:'Sam',age:23,email:'Sam@gmail'},
    {name:'john',age:23,email:'johnb@gmail'},
    {name:'wick',age:23,email:'wick@gmail'},
    {name:'peter',age:23,email:'peterb@gmail'}
  ]

  getmail(mail:string){
    console.log(mail);
  }
}
