import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APRRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { APRCoreModule } from './core/core.module';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    APRCoreModule,
    APRRoutingModule,

    MatToolbarModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
