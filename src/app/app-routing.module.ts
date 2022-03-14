import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForosComponent } from './foros/foros.component';
import { FOROS_ROUTES } from './foros/foros.routes';


const routes: Routes = [
  { path: 'foro', component: ForosComponent, children: FOROS_ROUTES },
  { path: '**', redirectTo: 'foro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
