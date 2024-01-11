import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '/error' },

];
