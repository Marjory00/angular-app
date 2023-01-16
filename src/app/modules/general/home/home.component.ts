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
      img: "'./assets/params/images/img/pexels-mart-production-7709235.jpg'",
      name: "Persona-1",
      description: "Team",
      title: '/member'
    },
    {
      img: "'../src/assets/params/img/pexels-eberer-3389613.jpg'",
      name: "Persona-2",
      description: "Team",
      title: '/member'

    },
    {
      img: "'./assets/params/images/example-bootstrap/movie-screen.jpg'",
      name: "Persona-3",
      description: "Team",
      title: '/member'
    },
    {
      img: "'../src/assets/params/img/pexels-eberer-3389613.jpg'",
      name: "Persona-4",
      description: "Team",
      title: '/member'

    },
  ]
item: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object) {
    }
  
  ngOnInit(): void {
  

}
}
