import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Feature } from './feature';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';


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
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: object) {
    
  this.features = [
    {
      type: 'CRUD',
      name: "Persona",
      description: 'CRUD, API Rest, Components, Pages, Extends',
      image: "pexels-andrea-piacquadio-733872.jpg",
      link: '/images'
    },
    {
      type: 'CRUD',
      name: "Persona",
      description: 'CRUD, API Rest, Components, Pages, Extends',
      image: "pexels-daniel-xavier-1239291.jpg",
      link: '/images'
    },
    {
      type: 'CRUD',
      name: "Persona",
      description: 'CRUD, API Rest, Components, Pages, Extends',
      image: "pexels-christina-morillo-1181519.jpg",
      link: '/images'
    },
    {
      type: 'CRUD',
      name: "Persona",
      description: 'CRUD, API Rest, Components, Pages, Extends',
      image: "pexels-rodnae-productions-7821936.jpg",
      link: '/images'
    },
  ]
    }
  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      let navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function () {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }
    this.titleService.setTitle('Angular Application');
    this.meta.addTag({
      name: 'angular-app-inmo',
      content: 'angular'

    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Angular Application' + 
        'Progressive Web App (PWA)'
      });
    
  }
  
}

