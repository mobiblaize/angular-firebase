import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then( m=> m.UserModule)
  },
  {
    path: 'kanban',
    canActivate: [AuthGuard],
    loadChildren: () => import('./kanban/kanban.module').then( m=> m.KanbanModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then( m=> m.CustomersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
