import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface userDetails {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css'],
})
export class TemplateDrivenFormsComponent implements OnInit {
  userInformation!: NgForm;
  userInformationObject: Partial<userDetails> = {};
  constructor() {}

  ngOnInit(): void {}

  userInformationDetails(formDetails: NgForm) {
    console.log('form details', formDetails);
    this.userInformationObject = { ...formDetails.value };
    formDetails.reset();
  }
}
