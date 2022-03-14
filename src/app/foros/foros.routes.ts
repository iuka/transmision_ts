import { Routes } from '@angular/router';
import { Foro1Component } from './foro1/foro1.component';
import { Foro2Component } from './foro2/foro2.component';



export const FOROS_ROUTES: Routes = [
    { path: '1', component: Foro1Component},
    { path: '2', component: Foro2Component },
    { path: '**', pathMatch: 'full', redirectTo: '1' }
];
