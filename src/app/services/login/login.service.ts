import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
    constructor(private http : Http){
        console.log('Login Service initializing...')
    }

    getSearch(search:string){
        return this.http.get('https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&site=stackoverflow&title='+ search)
        .map(res => res.json());
    }
}