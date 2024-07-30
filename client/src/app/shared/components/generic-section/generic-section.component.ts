import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardTitleComponent } from "../card-title/card-title.component";
import { SharedModule } from '../../shared.module';
import { TitleModel } from '@core/models/title.model';

@Component({
  selector: 'app-generic-section',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    CardTitleComponent,
],
  templateUrl: './generic-section.component.html',
  styleUrl: './generic-section.component.css'
})
export class GenericSectionComponent {


  //using Input decorator
  @Input() title: string = '';

  //dato de entrada 'mode' - acepta solo UNO de DOS valores dados
  @Input() mode: 'small' | 'big' = 'big'; // valor default = 'big'


  @Input() titleData: Array<TitleModel> = [];


}
