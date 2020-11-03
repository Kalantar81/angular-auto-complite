import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAutocompliteComponent } from './ngx-autocomplite/ngx-autocomplite.component';
import { AutoCompliteComponent } from './auto-complite/auto-complite.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgxAutocompliteComponent,
    AutoCompliteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgxAutocompliteComponent
  ],
  entryComponents: [
    NgxAutocompliteComponent
  ]
})
export class AutoCompliteModule { }
