import { importType } from "@angular/compiler/src/output/output_ast";

import { Component, Input, Output,EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck } from "@angular/core";


@Component ({
    selector: 'parques',
    templateUrl: './parques.component.html'
}) 
export  class ParquesComponent implements OnChanges, OnInit, DoCheck {
    @Input() nombre: string;
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;
    @Output() pasameLosDatos = new EventEmitter();

    constructor(){
        this.nombre = "parque de perros";
        this.metros = 58;
        this.vegetacion = "mucha";
        this.abierto = true;

    }

    ngOnInit() {
        console.log("metodo on init throw");
    }
    ngDoCheck() {
        console.log("cambios docheck");
    }
    
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }
    
    emitirEvento(){
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });
    }
}