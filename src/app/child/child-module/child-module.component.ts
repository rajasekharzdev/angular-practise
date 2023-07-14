import { Component, OnInit } from '@angular/core';
import { ChildModuleService } from '../Services/childModuleService';

@Component({
  selector: 'app-child-module',
  templateUrl: './child-module.component.html',
  styleUrls: ['./child-module.component.css'],
  providers: [ChildModuleService],
})
export class ChildModuleComponent implements OnInit {
  constructor(private childModuleService: ChildModuleService) {}

  ngOnInit(): void {
    this.childModuleService.getChildInformation();
  }
}
