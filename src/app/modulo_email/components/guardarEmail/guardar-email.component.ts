import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'guardarEmail',
  templateUrl: `
  <h2>{{title}}</h2>
  <input type="text" [(ngModel)] = "emailContacto"/>
  button (click) = "guardarEmail()">guardar email</button>
  `
})
export class GuardarEmailComponent {
  title = 'NGZOO';
  emailContacto;

  guardarEmail(){
    localStorage.setItem("contactoEmail",this.emailContacto);
  }

}
