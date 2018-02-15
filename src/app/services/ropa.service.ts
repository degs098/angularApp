import { Injectable } from "@angular/core";

@Injectable()
export class RopaService{

    private listaPrendas:Array<string>;    

    constructor(){
        this.listaPrendas = ['Camiseta', 'Pantalon'];
    }

    public addPrenda(prenda:string){
        this.listaPrendas.push(prenda);
    }

    public deletePrenda(index:number){
        this.listaPrendas.splice(index, 1);
    }

    public getPrendas(){
        return this.listaPrendas;
    }
}