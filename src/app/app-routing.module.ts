import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivePractiseComponent } from './directive-practise/directive-practise.component';
import { RouteGuardService } from './services/route-guard.service';
import { ViewchildComponent } from './viewchild/viewchild.component';

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
  { path: '', component: ViewchildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
