import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private subject$ = new Subject<string>();

  sendMessage() {
    this.subject$.next('subject123');
  }

  sendMessage234() {
    this.subject$.next('subject234');
  }

  getMessage(): Observable<any> {
    return this.subject$.asObservable();
  }
}
