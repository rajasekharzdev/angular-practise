import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { LifeCycleService } from './life-cycle.service';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css'],
})
export class LifeCycleHooksComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  private _employee: any;
  get employee(): any {
    return this._employee;
  }
  @Input() set employee(value: any) {
    this._employee = value;
  }

  @Input() employeePhoneNum: any;
  textCheck: any = '';
  constructor(private lifeCycleSevice: LifeCycleService) {}

  ngOnChanges() {
    console.log('1');
  }

  ngOnInit(): void {
    console.log('2');
  }

  ngDoCheck() {
    console.log('3');
  }

  ngAfterContentInit() {
    console.log('4');
  }

  ngAfterContentChecked() {
    console.log('5');
  }

  ngAfterViewInit() {
    console.log('6');
  }

  ngAfterViewChecked() {
    console.log('7');
  }

  ngOnDestroy() {
    console.log('8');
  }
}
