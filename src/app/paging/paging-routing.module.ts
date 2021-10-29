import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagingComponent } from './paging.component';

const routesR: Routes = [
  {
    path: '',
    component: PagingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesR)],
  exports: [RouterModule],
})
export class PagingRoutingModule {}
