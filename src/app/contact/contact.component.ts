import { Component } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

    private title:string;

    constructor(){
        this.title = 'Contácto';
    }
}