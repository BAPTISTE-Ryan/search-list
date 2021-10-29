import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutabRoutingModule } from './routab-routing.module';
import { RoutabComponent } from './routab.component';

@NgModule({
  imports: [CommonModule, RoutabRoutingModule],
  declarations: [RoutabComponent],
})
export class RoutabModule {}
