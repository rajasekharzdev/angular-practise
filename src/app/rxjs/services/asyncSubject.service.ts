import { Injectable } from '@angular/core';
import { AsyncSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsyncSubjectService {
  private asyncSubject$ = new AsyncSubject<string>();

  sendMessage() {
    this.asyncSubject$.next('async subject');
    this.asyncSubject$.next('async subject 1');
    this.asyncSubject$.next('async subject 2');
    this.asyncSubject$.next('async subject 3');
    this.asyncSubject$.next('async subject 4');
    this.asyncSubject$.complete();
  }

  getMessage(): Observable<any> {
    return this.asyncSubject$.asObservable();
  }
}
