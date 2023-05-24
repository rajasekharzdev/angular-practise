import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorSubjectService {
  behaviorSubject$ = new BehaviorSubject<string>('behaviorSubject');

  sendMessage() {
    this.behaviorSubject$.next('behaviorSubject2');
  }

  sendMessage123() {
    this.behaviorSubject$.next('behaviorSubject123');
  }

  getMessage(): Observable<any> {
    return this.behaviorSubject$.asObservable();
  }
}
