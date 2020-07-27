import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  title = 'TODO';
  TODOS;
  public disableAddButton: boolean;  

  constructor(
    private api: ApiService,
    private router: Router,
  )
  {
    this.getAllTODOS();
    
  }

  getAllTODOS = () =>
  {
    this.api.getAllTODOS().subscribe(
      data => {
        this.TODOS = data;        
      },
      error => 
      {
        console.log(error)
      }
    )
  }
  
  todo_detail(todo){
    this.disableAddButton = true;
    this.router.navigate(['todo-detail', todo.id])
  }

  addNewTodo(){
    this.disableAddButton = true;
    this.router.navigate(['new-todo'])
  }
  getBackgroundColor(todo){
    if (todo.is_completo == 'NAO'){
      return '#b96e6e'
    } else{
      return 'darkcyan'
    }
  }
}
