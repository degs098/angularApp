import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Empleado } from './../models/empleado';
import { AppConstants } from './../constants/app.constants';


@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit{

    private title:string;
    private language:string;
    private empleado:Empleado;
    private listaEmpleados:Array<Empleado>;                
    private idEmpleado:number;

    constructor(private _route:ActivatedRoute, private _router:Router){
        this.title = 'Empleados';           
        this.language = AppConstants.LANGUAGE;
        this.empleado = new Empleado('Daniel', 19, 'Programador', true);        
        this.listaEmpleados = [
            new Empleado('Daniel', 19, 'Programador', true)
        ];
    }

    ngOnInit() {        
        this._route.params.forEach((params:Params) => {
            this.idEmpleado = params['id'];
        });        
    }
}