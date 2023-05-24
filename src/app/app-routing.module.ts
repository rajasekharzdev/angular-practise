import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivePractiseComponent } from './directive-practise/directive-practise.component';
import { RouteGuardService } from './services/route-guard.service';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { PipesComponent } from './pipes/pipes.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { OperatorsComponent } from './rxjs/operators/operators.component';
import { SubjectsComponent } from './rxjs/subjects/subjects.component';

const routes: Routes = [
  {
    path: 'viewchild',
    component: ViewchildComponent,
  },
  {
    path: 'directive',
    component: DirectivePractiseComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  { path: 'directive', component: DirectivePractiseComponent },
  { path: 'angularmaterial', component: AngularMaterialComponent },
  {
    path: 'rxjs',
    component: RxjsComponent,
    children: [
      {
        path: 'operators', // child route path
        component: OperatorsComponent, // child route component that the router renders
      },
      {
        path: 'subjects', // child route path
        component: SubjectsComponent, // child route component that the router renders
      },
    ],
  },
  { path: 'pipes', component: PipesComponent },
  { path: '', component: ViewchildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
