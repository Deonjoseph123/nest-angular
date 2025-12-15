import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Component } from '@angular/core';
import { About } from './about/about';
import { Business } from './business/business';
import { Home } from './home/home';
import { Academia } from './academia/academia';

export const routes: Routes = [
    {path:'contact',component:Contact}
    ,{path:'about',component:About}
    ,{path:'business',component:Business}
    ,{path:'home',component:Home}
    ,{path:'Academia',component:Academia}
]
