import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    
    private title:string;    

    constructor(){        
        this.title = 'Home';
    }

    ngOnInit() {

    }
}