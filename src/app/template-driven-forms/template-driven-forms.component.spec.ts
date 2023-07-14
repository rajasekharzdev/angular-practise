import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsComponent } from './template-driven-forms.component';
import { FormsModule } from '@angular/forms';

fdescribe('TemplateDrivenFormsComponent', () => {
  let component: TemplateDrivenFormsComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TemplateDrivenFormsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check first name', () => {
    const inputElement = document.getElementById('firstName');
    (<HTMLInputElement>inputElement).value = 'asdf';
    (<HTMLInputElement>inputElement).dispatchEvent(new Event('input'));
    // console.log(component.ngForm.form.controls.first.value);
    expect(component.userInformation.form.valid).toBeTruthy();
  });
});
