import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutabComponent } from './routab.component';

const routes: Routes = [
  {
    path: '',
    component: RoutabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutabRoutingModule {}
