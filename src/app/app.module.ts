import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';

import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ItemsComponent } from './modules/application/items/items.component';
import { ItemsModule } from './modules/application/items/items.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
    ],
    providers: [],
    bootstrap: [
      AppComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        HttpClientModule,
        BrowserModule
    ]
})
export class AppModule { }
