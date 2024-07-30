import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitlesRoutingModule } from './titles-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TitlesRoutingModule,
    SharedModule
  ]
})
export class TitlesModule { }
