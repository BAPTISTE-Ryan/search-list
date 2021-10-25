import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutabRoutingModule } from './translate-routing.module';
import { RoutabComponent } from './translate.component';

@NgModule({
  imports: [CommonModule, TranslateRoutingModule],
  declarations: [TranslateComponent],
})
export class RoutabModule {}
