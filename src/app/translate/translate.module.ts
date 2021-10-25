import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateComponent } from './translate.component';

@NgModule({
  imports: [CommonModule, TranslateRoutingModule],
  declarations: [TranslateComponent],
})
export class TranslateModule {}
