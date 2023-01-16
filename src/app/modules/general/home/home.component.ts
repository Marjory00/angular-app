import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environment';

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

  items = [
    {
      icon: "fa-solid fa-file-lines",
      name: "Landing Page",
      description: "CSS linear-gradient",
      link: '/landing-page'
    },
    {
      icon: "fa-solid fa-address-card",
      name: "Image Cards",
      description: "Cascade Cards",
      link: '/cards'

    },
    {
      
    }
  ]

  constructor(
    @Inject(PLATFORM_ID) private platformId: object) {
    }
  
  ngOnInit(): void {
  

}
}
