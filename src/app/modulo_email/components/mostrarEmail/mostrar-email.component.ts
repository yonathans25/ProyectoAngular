import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrarEmail',
  templateUrl: `
  <h2>{{title}}</h2>
  <li class="hidden">
          <span *ngIf ="emailContacto">Email contacto: {{emailContacto}}
            <button (click) = "borrarEmail()">Eliminar email de contacto</button>
          </span>
        </li>
  `
})
export class MostrarEmailComponent implements OnInit, DoCheck{
  title = 'NGZOO';
  emailContacto;

  ngOnInit(){
    this.emailContacto =localStorage.getItem("contactoEmail");
  }
  
  ngDoCheck(){
    this.emailContacto =localStorage.getItem("contactoEmail");
  }

  borrarEmail(){
    localStorage.removeItem("contactoEmail");
    this.emailContacto = null;

  }

}
