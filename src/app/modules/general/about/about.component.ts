import { Component , Inject, OnInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';


import { SeoService } from 'src/app/services/seo.service';
import { Quote } from './quote';
import { Feature } from './feature';
import { Dependency } from './dependency';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  dependencies: Dependency;
  feature: Feature;
  quote: Quote;
  id: number;
  featureName: { frontend: { name: string; title: string; link: string; }[]; } | undefined;

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: object) {

      const content = 'About content with meta';
      this.seoService.setMetaDescription(content);

      this.id = 0;
      this.quote = new Quote();
      this.dependencies = {
        frontend: [
          { name: 'Angular 15.1.0' },
          { name: 'Angular CLI 15.1.1' },
          { name: 'Angular Universal 15.1.0' },
          { name: 'Bootstrap 5.2.3' },
          { name: 'Font Awesome 6.2.1' },
        ],
        backend: [
          { name: 'Node.js 16.15.0' },
          { name: 'Express 4.18.1' },
          { name: 'pg-promise 10.10.2' },
        ]
      };
  

      this.feature = {
        frontend: [
          {
            name: 'Server side Rendering',
            title: 'Angular',
            link: '#',
          },
          {
            name: 'Server side Rendering',
            title: 'Angular',
            link: '#',
          },
          {
            name: 'Bootstrap',
            title: 'Bootstrap',
            link: '#',
          },
        ],
        backend: [
          { name: 'Local JSON' },
          { name: 'RESTFull API' },
          { name: 'CRUD API' },
          { name: 'Database Creation' },
          { name: 'Data Import' },
          { name: 'Data Export' },
        ]
    };
  }

  
  ngOnInit(): void {
    this.loadQuote();

    const content =
    'Building a Progressive Web App (PWA)';

    const title = 'angular-app-inmo Title: About Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
   
  }

  loadQuote() {
    
    const quotes = [
      {
        name: 'Lawrence of Arabia',
        title: 'There is nothing in the desert and no man needs nothing',
        link: 'https://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)'
      },
      {
        name: 'Alien Prometheus',
        title: 'Big things have small beginnings',
        link: 'https://en.wikipedia.org/wiki/Prometheus_(2012_film)'
      },
      {
        name: 'Blade Runner',
        title: 'All those moments will be lost in time... like tears in rain... Time to die.',
        link: 'https://en.wikipedia.org/wiki/Blade_Runner'
      },
    ];
  
    const index = quotes.length;
    let id = this.id;
    while (this.id === id) {
      id = Math.floor(Math.random() * index);
    }
    this.id = id;
    this.quote = quotes[id];
  }
}