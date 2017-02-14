import { Component, OnInit } from '@angular/core';
import {IMyOptions, IMyDateModel} from 'mydatepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
        todayBtnTxt: 'Now',
        disableDateRange: {begin: {year: 2017, month: 2, day: 1}, end: {year: 2016, month: 2, day: 5}},
    };

    private selector: number = 0;

    // Initialized to specific date (09.10.2018). It is also possible to set initial
    // date value using the selDate attribute.
    private model1: Object = { date: { year: 2018, month: 10, day: 9 } };
    private model2: Object = { date: { year: 2018, month: 10, day: 9 } };

    constructor() { 
      // console.log(this.model);
    }
  ngOnInit() {
  } 


  // ngModel functions here
    onSubmitNgModel1(): void {
        console.log('Value: ', this.model1);
    }
    
  // ngModel2 functions here
    onSubmitNgModel2(): void {
        console.log('Value: ', this.model2);
    }

    onDateChanged(){
      this.onSubmitNgModel1();
      this.onSubmitNgModel2();
    }

}
