import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ABMClientesComponent } from './abmclientes/abmclientes.component';
import { IndexComponent } from './index/index.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  { path: 'abmtarjetas', 
  component: ABMClientesComponent },
  { path: '', 
  component: IndexComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingcomponents = [IndexComponent, ABMClientesComponent]