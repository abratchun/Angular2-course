import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarPartsComponent } from './components/car-parts/car-parts.component';
import {RacingDataService} from './components/car-parts/racing-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CarPartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RacingDataService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
