import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { Coche } from './../models/coche';
import { RequestService } from './../services/requests.service';

@Component({
    selector: 'coches',
    styleUrls: ['./coches.component.scss'],
    templateUrl: './coches.component.html',
    providers: [RequestService]
})
export class CochesComponent implements OnInit{

    private title:string;
    private coche:Coche;
    private listCoches:Array<Coche>;    
    private listArticulos:Array<any>;

    constructor(
        private _requestService:RequestService
    ){
        this.title = 'Coches';
        this.coche = new Coche("","","");
        this.listCoches = [
            new Coche("Paganini","2005","Rojo"),
            new Coche("Renault","Clio","Gris")            
        ];        
    }

    ngOnInit() {             
        this.getPosts();
    }

    private onSubmit(){
        this.listCoches.push(this.coche);
    }

    private getPosts(){
        this._requestService.getPosts().subscribe(
            result => {                
                this.listArticulos = result;                                
            },
            error => {
                let err = <any> error;
                console.log(err);
            }
        );
    }

}