import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 
  title = 'angular-inmo';
  version = 'Angular version 15.0.0';
  footerUrl =  "https://github.com/Marjory00/";
  this = [];
  isBrowser: boolean;


constructor(
  @Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
}

ngOnInit(): void {
}
}
{
  if (isPlatformBrowser(PLATFORM_ID)) {
    const navMain = document.getElementById('navbarCollapse');
    if (navMain) {
      navMain.onclick = function onClick() {
        if (navMain) {
          navMain.classList.remove("show");
        }
      }
    }
  }
}
