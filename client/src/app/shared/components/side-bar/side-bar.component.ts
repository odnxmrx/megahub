import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    RouterLink
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {


  //'mainMenu' -> obj de dos propiedades del tipo array
  mainMenu: 
    { defaultOptions: Array<any>} = { defaultOptions: []} //TS necesita su inicialización (valor inicial); simplemente vacíos

  customOptions: Array<any> = [];

  ngOnInit(): void {
    

    //main menu onInit
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/']
      },
      {
        name: 'Favorites',
        icon: 'uil-star',
        router: ['/', 'favorites']
      },
      {
        name: 'Search',
        icon: 'uil-search',
        router: ['/', 'search'],
        // query: { hola: 'mundo' }
      }
    ]

  }

}
