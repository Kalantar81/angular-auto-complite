import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complite',
  templateUrl: './auto-complite.component.html',
  styleUrls: ['./auto-complite.component.less']
})
export class AutoCompliteComponent implements OnInit {

  @Input()
  set searchArray(p_searchArray: Array<any>){
      this._searchArray = p_searchArray;
  }

  get searchArray(): Array<any> {
    return this._searchArray;
  }

  @Output() modelValue = new EventEmitter<string>();

  private _compareLengthValue = 0;
  private _searchArray: Array<any>;
  private _sortedObjectsArray: Array<any>;
  public value: string;
  public countries = [
    {'name': 'Brazil', 'code': 'BR'},
    {'name': 'Canada', 'code': 'CA'},
    {'name': 'France', 'code': 'FR'},
    {'name': 'India', 'code': 'IN'},
    {'name': 'Mexico', 'code': 'MX'},
    {'name': 'Nepal', 'code': 'NP'},
    {'name': 'New Zealand', 'code': 'NZ'},
    {'name': 'Reunion', 'code': 'RE'},
    {'name': 'Singapore', 'code': 'SG'},
    {'name': 'Spain', 'code': 'ES'},
    {'name': 'Sri Lanka', 'code': 'LK'},
    {'name': 'United Kingdom', 'code': 'GB'},
    {'name': 'United States', 'code': 'US'}
];

  constructor() {}

  ngOnInit() {
  }

  public sortInjectedArray(model: any): void {
    const modelLength = model.target.value.length;
    this.modelValue.emit(model.target.value);
    if (this._compareLengthValue < modelLength ) {
      this._compareLengthValue++;
      this._sortedObjectsArray = this._sortedArray(model.target.value);
    } else {
      this._sortedObjectsArray = this._sortedArray(model.target.value);
    }
  }

  private _sortedArray(model: string): Array<any>{
    const sortedArray = [];
    // for (let i = 0; i < this._numberArray.length; i++) {
    //   if (model == this._numberArray[i].substring(0, model.length)) {
    //     sortedArray.push(this._numberArray[i]);
    //   }
    //  }
     for (let i = 0; i < this.countries.length; i++) {
      if (model == this.countries[i].name.substring(0, model.length)) {
        sortedArray.push(this.countries[i].name);
      }
     }
    return sortedArray;
  }
}
