import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoardComponent } from './board/board.component';
import { TaskCardComponent } from './board/task-card/task-card.component';
import { MaterialModule } from './material/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewTaskComponent } from './board/task-card/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardComponent,
    TaskCardComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [NewTaskComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
