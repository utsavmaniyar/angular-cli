import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { D3Service } from 'd3-ng2-service';
import { MyDatePickerModule } from 'mydatepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';

import { AppComponent } from './app.component';
import { UserComponent }  from './components/user/user.component';
import { AboutComponent }  from './components/about/about.component';
import { StackComponent }  from './components/stackAPI/stack.component';
import { AppHeaderComponent }  from './components/header/header.component';
import { LoginComponent }  from './components/login/login.component';
import { TechD3Component }  from './components/tech-d3/tech-d3.component';
import { Routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { TopQuestionsComponent } from './components/top-questions/top-questions.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { TechnologyDetailComponent } from './components/technology-detail/technology-detail.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent, 
    AppHeaderComponent,
    StackComponent,
    LoginComponent,
    HomeComponent,
    TopQuestionsComponent,
    TechD3Component,
    TechnologyComponent,
    TechnologyDetailComponent,
    DatePickerComponent,
    DateRangePickerComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Routing,
    MyDatePickerModule,
    MyDateRangePickerModule,
    // AlertModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
