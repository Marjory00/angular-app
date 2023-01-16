import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Feature } from './feature';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

footerLink: any;
footerUrl: any;
  
  name = environment.application.name;
  version = environment.application.version;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: Array<Feature> = [];

  item: any;


  constructor(
    @Inject(PLATFORM_ID) private platformId: object) {
    
  this.features = [
    {
      type: 'CRUD',
      name: "Persona-1",
      description: 'CRUD, API Rest, Components, Pages, Extends',
      image: "pexels-andrea-piacquadio-733872.jpg",
      link: '/images'
    },
    {
      type: 'CRUD',
      name: "Persona-1",
      description: 'CRUD, API Rest, Components, Pages, Extends',
      image: "pexels-daniel-xavier-1239291.jpg",
      link: '/images'
    },
    {
      type: 'CRUD',
      name: "Persona-1",
      description: 'CRUD, API Rest, Components, Pages, Extends',
      image: "pexels-christina-morillo-1181519.jpg",
      link: '/images'
    },
    {
      type: 'CRUD',
      name: "Persona-1",
      description: 'CRUD, API Rest, Components, Pages, Extends',
      image: "pexels-rodnae-productions-7821936.jpg",
      link: '/images'
    },
  ]
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

