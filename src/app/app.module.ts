import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material.module';
import { AutoCompliteModule } from './auto-complite/auto-complite.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AutoCompliteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
