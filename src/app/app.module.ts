import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ContentchildComponent } from './contentchild/contentchild.component';
import { DirectivePractiseDirective } from './directives/directive-practise.directive';
import { DirectivePractiseComponent } from './directive-practise/directive-practise.component';
import { RouteGuardService } from './services/route-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { MaterialModule } from './material/material.module';
import { PipesComponent } from './pipes/pipes.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjs/rxjs.component';
import { OperatorsComponent } from './rxjs/operators/operators.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './rxjs/subjects/subjects.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { OneAndTwoWayBindingComponent } from './one-and-two-way-binding/one-and-two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewchildComponent,
    ContentchildComponent,
    DirectivePractiseDirective,
    DirectivePractiseComponent,
    AngularMaterialComponent,
    PipesComponent,
    LifeCycleHooksComponent,
    RxjsComponent,
    OperatorsComponent,
    SubjectsComponent,
    HomeComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    OneAndTwoWayBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [RouteGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
