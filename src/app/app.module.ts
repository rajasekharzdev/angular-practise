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

@NgModule({
  declarations: [
    AppComponent,
    ViewchildComponent,
    ContentchildComponent,
    DirectivePractiseDirective,
    DirectivePractiseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [RouteGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
