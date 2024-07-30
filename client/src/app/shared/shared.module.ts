import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarComponent,
    GenericSectionComponent,
    CardTitleComponent,
  ],
  exports: [
    SideBarComponent,
    GenericSectionComponent,
    CardTitleComponent,
  ]
})
export class SharedModule { }
