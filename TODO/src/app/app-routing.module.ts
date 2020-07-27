import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponentComponent} from './components/todo-component/todo-component.component';
import {NewTodoComponent} from './components/new-todo/new-todo.component';

const routes: Routes = [
  {
    path:'todo-detail/:id',
    component:TodoComponentComponent
  },
  {
    path:'new-todo',
    component:NewTodoComponent
  },
  
];

@NgModule({
  imports: [    
    RouterModule.forRoot(routes),

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [TodoComponentComponent,]
