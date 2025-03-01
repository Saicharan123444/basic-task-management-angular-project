// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { TaskComponent } from './task/task.component';  // Import standalone component
import { TaskListComponent } from './task-list/task-list.component';  // Import TaskListComponent
import { HeaderComponent } from './header/header.component';  // Import HeaderComponent
import { FooterComponent } from './footer/footer.component';  // Import FooterComponent
import { CommonModule } from '@angular/common'; // Import CommonModule

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,  // Import CommonModule for ngFor and ngClass
    TaskComponent,  // Import standalone TaskComponent
    TaskListComponent,  // Import standalone TaskListComponent
    HeaderComponent,  // Import HeaderComponent
    FooterComponent,  // Import FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
