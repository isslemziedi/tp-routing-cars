/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list.component';
import { CarDetailComponent } from './car-detail.component';

@NgModule({
  declarations: [AppComponent, CarListComponent, CarDetailComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]), 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail.component';
import { CarListComponent } from './car-list.component';
import { RouterModule } from '@angular/router'; // Importez RouterModule

@NgModule({
  declarations: [AppComponent, CarDetailComponent, CarListComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule], // Ajoutez RouterModule ici
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}