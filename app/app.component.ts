import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Name: {{name}}</h1>`
})
export class AppComponent { name = 'Гніздюх Володимир'; }