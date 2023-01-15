import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './items.service';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HttpClientModule
  ],
  exports: [
    ItemsComponent
  ],
  providers: [
    ItemsService
  ],
})
export class ItemsModule { }
