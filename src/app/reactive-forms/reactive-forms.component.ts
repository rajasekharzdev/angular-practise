import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  userInformationObject!: any;
  profileForm!: FormGroup;
  alias = this.formBuilder.group({ alias: '' });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(5)]],
      lastName: [''],
      email: [''],
      aliasNames: this.formBuilder.array([]),
    });
  }

  get aliasNames() {
    return this.profileForm.controls['aliasNames'] as FormArray;
  }

  removeName(index: any) {}

  addName() {
    this.aliasNames.push(this.alias);
  }

  onSubmit() {
    this.profileForm.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }
}
