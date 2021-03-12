import { Component, OnChanges } from '@angular/core';

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styles: ['h1{color:blue}']
})
export class TiendaComponent implements OnChanges {
    public titulo;
    public nombreDelParque: string;

    constructor(){  
        this.titulo = 'hola mundo';
        this.nombreDelParque="";
        
    }
    ngOnChanges(){
        
    }
    mostrarNombre(){
        console.log(this.nombreDelParque);
    }

    
    verDatosParque(event: any){
        console.log(event);

    }

}