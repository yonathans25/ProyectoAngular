import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mainEmail',
  templateUrl: `
  <h1>{{title}}</h1>
  <mostrarEmail></mostrarEmail>
  <guardarEmail></guardarEmail>
  `
})
export class MainEmailComponent {
  title = 'modulo de email';

}