import { Component, OnInit, Injectable } from '@angular/core';
import {IMyOptions,IMyDateRangeModel} from 'mydaterangepicker';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {

  private tdate = new Date(); // Today's date
  private ydate = new Date(Date.now() - 864e5); // Yesterday's date
  private ndate = new Date(Date.now() + 864e5); // tomorrow's date
  private myDateRangePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
        disableSince: {year: this.ndate.getFullYear(), month: this.ndate.getMonth() + 1, day: this.ndate.getDate()},
    };

    // For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
    // to set initial date range value using the selDateRange attribute.
    private model: Object = {beginDate: {year: this.ydate.getFullYear(), month: this.ydate.getMonth() + 1, day: this.ydate.getDate()},
                             endDate: {year: this.tdate.getFullYear(), month: this.tdate.getMonth() + 1, day: this.tdate.getDate()}};

    private data:any;
    private flag:boolean = false;
    viewData:any = [];
    constructor(private http : Http) { 

    }
    getViews(){
        return this.http.get("../../../tech-data.json")
        .map(res => res.json());
    }

    views(diff:number){
    this.flag = false;
    this.getViews().subscribe(post => {
      this.data = post.technologies;
      for(var i=0; i < this.data.length;i++){
        this.viewData[i] = {view : Math.floor(diff + (this.data[i].popularity)*((Math.random() * 100) + 1)), name: this.data[i].name};
      }
      console.log(this.viewData);

        this.flag = true;
    });
    }

    onDateRangeChanged(event: IMyDateRangeModel) {
        
        var t = event.beginDate;
        var diff:number= (event.endEpoc - event.beginEpoc)/1000;
        this.views(diff);

    }

    ngOnInit() {
  }
}

