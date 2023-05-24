import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LifeCycleService {
  constructor() {}

  sampleHello() {
    return 'hello';
  }
}
