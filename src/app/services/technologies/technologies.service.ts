import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TechnologiesService {

  constructor(private http : Http) { 

  }

  getTech(){
        return this.http.get('../../../tech-data.json')
        .map(res => res.json());
    }

}
