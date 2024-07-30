import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TitleModel } from '@core/models/title.model';

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
  ],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.css'
})
export class CardTitleComponent {


  //default input 'mode' and 'track
  @Input() mode: 'small' | 'big' = 'big';

  @Input() title: TitleModel = {
    title: 'Matrix',
    director: 'N/A',
    genre: 'Drama',
    poster: 'https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg', //img
    // plot: string;
    year: 2001,
    imdbID: 'tt0106062',
  }

}
