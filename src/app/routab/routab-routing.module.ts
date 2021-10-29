import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutabComponent } from './routab.component';

const routesR: Routes = [
  {
    path: '',
    component: RoutabComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesR)],
  exports: [RouterModule],
})
export class RoutabRoutingModule {}
