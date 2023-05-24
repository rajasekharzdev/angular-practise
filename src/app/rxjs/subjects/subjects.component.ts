import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Observable, Subject, from, interval, of } from 'rxjs';
import { concatMap, map, switchMap, take } from 'rxjs/operators';
import { SubjectService } from '../services/subject.service';
import { BehaviorSubjectService } from '../services/behaviorSubject.service';
import { ReplySubjectService } from '../services/replaySubject.service';
import { AsyncSubjectService } from '../services/asyncSubject.service';
import * as subjectValue from '../services/subject.service';

@Component({
  selector: 'app-rxjs-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent implements OnInit {
  subjectValue!: string;
  valueObservable!: Observable<number>;
  constructor(
    private subjectService: SubjectService,
    private behaviorSubjectService: BehaviorSubjectService,
    private replySubjectService: ReplySubjectService,
    private asyncSubjectService: AsyncSubjectService,
    private changeDetector: ChangeDetectorRef,
    private ngZone: NgZone
  ) {
    this.subjectService.sendMessage();
  }

  ngOnInit(): void {}

  numberOfTimes: number = 0;
  subjectFunction() {
    console.log('im in subject function', ++this.numberOfTimes);
    this.subjectService.sendMessage();
    this.subjectService.getMessage().subscribe((valueSubscribed) => {
      this.subjectValue = valueSubscribed;
      console.log(this.subjectValue);

      // this.ngZone.run(() => {
      //   this.subjectValue = valueSubscribed;
      // });
    });
    this.subjectService.sendMessage234();

    // this.valueObservable = this.subjectService.getMessage();
  }

  behaviorSubjectFunction() {
    //will only display initial value until new observer is called

    this.behaviorSubjectService.getMessage().subscribe((valueSubscribed) => {
      this.subjectValue = valueSubscribed;
      console.log(this.subjectValue);
    });
    this.behaviorSubjectService.sendMessage();
    this.behaviorSubjectService.sendMessage123();
  }

  replaySubjectFunction() {
    this.replySubjectService.sendMessage();
    this.replySubjectService.getMessage().subscribe((valueSubscribed) => {
      this.subjectValue = valueSubscribed;
      console.log(this.subjectValue);
    });
  }

  asyncSubjectFunction() {
    console.log('im async subject');
    this.asyncSubjectService.sendMessage();
    this.asyncSubjectService.getMessage().subscribe((valueSubscribed) => {
      this.subjectValue = valueSubscribed;
      console.log(this.subjectValue);
    });
  }
}
