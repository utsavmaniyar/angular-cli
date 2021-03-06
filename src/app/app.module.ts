import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { D3Service } from 'd3-ng2-service';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    // AlertModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
