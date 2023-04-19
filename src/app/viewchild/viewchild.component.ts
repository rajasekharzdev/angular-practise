import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ContentchildComponent } from '../contentchild/contentchild.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css'],
})
export class ViewchildComponent implements OnInit {
  @ViewChild(ContentchildComponent)
  viewChildReference!: ContentchildComponent;

  private _employee: any;
  get employee(): any {
    return this._employee;
  }
  @Input() set employee(value: any) {
    this._employee = value;
  }

  @Input() employeePhoneNum: any;
  @Output() employeeInformation = new EventEmitter();

  @ViewChild('accessingFromDOM') accessingFromDOM!: ElementRef;

  constructor() {
    console.log('Constructor');
  }

  ngOnChanges() {
    //this.employee
    console.log('ngOnChanges');
    this.employee = 'Kiran';
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  sendToParent() {
    this.employeeInformation.emit('hello');
  }

  // ngAfterViewInit() {
  //   console.log(
  //     'view child reference in ngafterview',
  //     this.viewChildReference.demo()
  //   );
  //   console.log('native element:', this.accessingFromDOM.nativeElement);
  //   this.accessingFromDOM.nativeElement.innerHTML = 'Hello';
  // }
}
