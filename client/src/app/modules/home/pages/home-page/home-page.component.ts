import { Component } from '@angular/core';
import { SideBarComponent } from "../../../../shared/components/side-bar/side-bar.component";
import { SharedModule } from '../../../../shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { CardTitleComponent } from 'src/app/shared/components/card-title/card-title.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SideBarComponent,
    SharedModule,
    RouterOutlet,
    CardTitleComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
