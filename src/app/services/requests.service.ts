import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AppConstants } from './../constants/app.constants';

@Injectable()
export class RequestService{
    
    constructor(
        private _http:Http
    ){}

    public getPosts():any{
        return this._http
            .get(AppConstants.URL_SERVICE+'/posts')
            .map(response => response.json());
    }

}