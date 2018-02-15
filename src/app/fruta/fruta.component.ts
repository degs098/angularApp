import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html',
    styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit{
    
    private title:string;
    private listaFrutas: Array<string>;
    
    constructor(){
        this.title = 'Frutas';
        this.listaFrutas = ['Manzana', 'Pera', 'Banano'];        
    }

    ngOnInit() {
                
    }
}