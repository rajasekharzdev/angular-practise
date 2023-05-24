import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReplySubjectService {
  private replaySubject$ = new ReplaySubject<string>();

  sendMessage() {
    this.replaySubject$.next('replaySubject');
    this.replaySubject$.next('replaySubject 1');
    this.replaySubject$.next('replaySubject 2');
    this.replaySubject$.next('replaySubject 3');
    this.replaySubject$.complete();
    this.replaySubject$.next('replaySubject 4');
    this.replaySubject$.next('replaySubject 5');
  }

  getMessage(): Observable<any> {
    return this.replaySubject$.asObservable();
  }
}
