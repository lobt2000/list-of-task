import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { TaskListComponent } from './pages/works/task-list/task-list.component';
import { UsersListComponent } from './pages/works/users-list/users-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    { path: 'cenzor', component: CenzorComponent },
   { path: 'task-list', component:TaskListComponent},
    { path: 'users-list', component: UsersListComponent }
    ] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
