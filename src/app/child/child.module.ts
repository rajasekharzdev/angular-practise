import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildModuleComponent } from './child-module/child-module.component';

@NgModule({
  declarations: [ChildModuleComponent],
  imports: [CommonModule],
})
export class ChildModule {}
