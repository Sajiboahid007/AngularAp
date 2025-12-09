import { Component, signal, SimpleChange } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Singup } from './singup/singup';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgSwitch,NgSwitchCase],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

    color = "green";

    colors = ["red", "green", "blue", "yellow"];
  index = 0;

  get nextColor() {
    return this.colors[(this.index + 1) % this.colors.length];
  }

  changeColor() {
    this.index = (this.index + 1) % this.colors.length;
    this.color = this.colors[this.index];
  }
}
