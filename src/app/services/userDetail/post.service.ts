import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{
    constructor(private http : Http){
        console.log('PostService initializing...')
    }

    getPost(){
        return this.http.get('https://jsonplaceholder.typicode.com/users')
        .map(res => res.json());
    }
}