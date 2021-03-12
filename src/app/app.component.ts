import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'NGZOO';
  emailContacto;

  ngOnInit(){
    this.emailContacto =localStorage.getItem("contactoEmail");
   // console.log(localStorage.getItem("emailContacto"));
  }
  
  ngDoCheck(){
    this.emailContacto =localStorage.getItem("contactoEmail");
  }

  borrarEmail(){
    localStorage.removeItem("contactoEmail");
    this.emailContacto = null;

  }

}

