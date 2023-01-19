import { Component } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  constructor(private seoService: SeoService) {

    const content = 'angular-app=inmo - Description - Contact Page';
    const title = 'angular-app-inmo - Title - Contact Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaDescription(title);
  }

}
