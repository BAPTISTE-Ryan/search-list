import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoutabComponent } from './routab/routab.component';

const routes: Routes = [
  {
    path: 'routab',
    loadChildren: () =>
      import('./routab/routab.module').then((m) => m.RoutabModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
