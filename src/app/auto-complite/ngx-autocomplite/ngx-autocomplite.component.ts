import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-autocomplite',
  templateUrl: './ngx-autocomplite.component.html',
  styleUrls: ['./ngx-autocomplite.component.less']
})
export class NgxAutocompliteComponent implements OnInit {

  //public modelValue: string;

  constructor() { }

  ngOnInit() {
  }

  public modelValueEvent(model) {
    console.log(model);
   // this.modelValue = model;
    }

}
