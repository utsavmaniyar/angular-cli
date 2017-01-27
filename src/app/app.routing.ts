import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user/user.component';
import {AboutComponent} from './components/about/about.component';
import {StackComponent} from './components/stackAPI/stack.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {TechnologyComponent} from './components/technology/technology.component';
import {TechnologyDetailComponent} from './components/technology-detail/technology-detail.component';

const appRoutes: Routes = [
    {
        path:'user',
        component: UserComponent,
    },
    {
        path:'stack',
        component: StackComponent,
    },
    {
        path:'login',
        component: LoginComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'technologies',
        component: TechnologyComponent,
    },
    {
        path: 'technology/:tech',
        component: TechnologyDetailComponent,
    },
    {
        path: '',
        component: HomeComponent,
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);