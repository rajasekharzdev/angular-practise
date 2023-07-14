import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ChildModule } from '../child.module';

@Injectable({
  providedIn: 'any',
})
export class ChildModuleService {
  getChildInformation() {
    console.log('Only accessed in child routes');
  }
}
