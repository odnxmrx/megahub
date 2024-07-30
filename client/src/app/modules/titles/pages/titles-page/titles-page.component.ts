import { Component, OnInit } from '@angular/core';
import { GenericSectionComponent } from 'src/app/shared/components/generic-section/generic-section.component';
import * as dataRaw from '../../../../core/titlesRaw.json';
import { TitleModel } from '@core/models/title.model';


@Component({
  selector: 'app-titles-page',
  standalone: true,
  imports: [
    GenericSectionComponent
  ],
  templateUrl: './titles-page.component.html',
  styleUrl: './titles-page.component.css'
})
export class TitlesPageComponent implements OnInit {

  mockTitlesList: Array<TitleModel> = [];

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    // console.log(data);
    
    this.mockTitlesList = data;
  }
}
