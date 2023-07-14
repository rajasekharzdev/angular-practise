import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-and-two-way-binding',
  templateUrl: './one-and-two-way-binding.component.html',
  styleUrls: ['./one-and-two-way-binding.component.css'],
})
export class OneAndTwoWayBindingComponent implements OnInit {
  textValue: string = '';
  constructor() {}

  ngOnInit(): void {}

  updateValue() {
    this.textValue = '123';
  }

  valueUpdated() {
    console.log('updated value:', this.textValue);
  }
}
