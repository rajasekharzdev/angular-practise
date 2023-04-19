import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePractiseComponent } from './directive-practise.component';

describe('DirectivePractiseComponent', () => {
  let component: DirectivePractiseComponent;
  let fixture: ComponentFixture<DirectivePractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivePractiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
