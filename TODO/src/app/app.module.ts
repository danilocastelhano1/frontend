import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponentComponent } from './components/todo-component/todo-component.component';
import {AppRoutingModule} from './app-routing.module';
import { NewTodoComponent } from './components/new-todo/new-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
