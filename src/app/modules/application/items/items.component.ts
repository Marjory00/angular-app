import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ItemsService } from './items.service';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{

  items: any;
  loaded: boolean = false;
  item: any;

  constructor(
    private itemsService: ItemsService) {
      this.loaded = false;
    }

  
  ngOnInit(): void {
   this.getUsers();
  }

  getUsers(): void {
    this.loaded = false;
    this.itemsService.getItems('https://jsonplaceholder.typicode.com/users')
    .subscribe(
      items => {
        this.items = items;
        this.loaded = true;
      }
    );
  }

  resetUsers(): void {
    this.items = null;
    this.loaded = true;
  }

}
