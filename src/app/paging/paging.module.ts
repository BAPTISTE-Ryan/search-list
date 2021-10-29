import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingRoutingModule } from './paging-routing.module';
import { PagingComponent } from './paging.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PagingRoutingModule],
  declarations: [PagingComponent,FormsModule],
})
export class PagingModule {}
