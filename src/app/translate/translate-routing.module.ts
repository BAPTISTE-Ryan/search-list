import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutabComponent } from './translate.component';

const routesT: Routes = [
  {
    path: '',
    component: TranslateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesT)],
  exports: [RouterModule],
})
export class TranslateRoutingModule {}
