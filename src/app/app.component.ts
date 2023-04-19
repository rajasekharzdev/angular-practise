import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges {
  title = 'angular-topics-practise';
  data: any;
  employee: any;
  employeePhoneNum: any;
  @ViewChild('hello') employeeData!: ElementRef;
  apiCalls!: Subscription;
  apiCall2!: Subscription;

  constructor(private httpClient: HttpClient) {}

  ngOnChanges() {}
  ngOnInit() {
    // this.apiCalls = this.httpClient
    //   .get('https://dummy.restapiexample.com/api/v1/employees')
    //   .subscribe((data: any) => {
    //     console.log('data....', data);
    //     this.data = data.data;
    //   });
  }

  ngAfterViewInit() {
    //console.log('123', this.employeeData.nativeElement.ba);
  }

  ngOnDestroy() {
    this.apiCalls.unsubscribe();
    this.apiCall2.unsubscribe();
  }

  employeeInformation(event: any) {
    console.log('event', event);
  }
}
