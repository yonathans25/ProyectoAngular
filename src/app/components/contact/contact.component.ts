import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  title = 'contact';
  emailContacto: string;

   guardarEmail(){
     localStorage.setItem("contactoEmail",this.emailContacto);
   }

   constructor(){
    this.emailContacto = "";
  }

  ngOnInit(){
      console.log('contact.component cargado');
  }
}