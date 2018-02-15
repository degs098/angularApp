import { Component } from "@angular/core";
import { RopaService } from './../services/ropa.service';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: 'ropa',
    templateUrl: './ropa.component.html',
    styleUrls: ['./ropa.component.scss'],
    providers: [RopaService]
})
export class RopaComponent implements OnInit{

    private title:string;
    private prenda:string;
    private listaPrendas:Array<string>;
    private fecha:Date;
    
    constructor(private _ropaService:RopaService){
        this.title = 'Ropa';
        this.prenda = '';
        this.fecha = new Date();
    }

    ngOnInit() {
        this.getPrendas();
    }

    private getPrendas(){
        this.listaPrendas = this._ropaService.getPrendas();
    }

    private addPrenda(prenda:string){
        this._ropaService.addPrenda(prenda);
        this.prenda = '';
    }

    private deletePrenda(index:number){
        this._ropaService.deletePrenda(index);
    }
} 