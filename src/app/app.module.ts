import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { TaskListComponent } from './pages/works/task-list/task-list.component';
import { TableComponent } from './pages/works/task-list/table/table.component';
import { UsersListComponent } from './pages/works/users-list/users-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    CenzorComponent,
    TaskListComponent,
    UsersListComponent,
    TableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
