import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {
  todoSelected;
  data;

  constructor(
    private component: AppComponent,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    ) { 
    this.todoSelected = {}    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (param: ParamMap) => {
      this.todo_Selected(param.get('id'));
    }
    )    
  }

  todo_Selected(id){
    this.api.getOneTODO(id).subscribe(
      data => {
        this.todoSelected = data;
      },
      error => 
      {
        console.log(error)
      }
    )
  }

  updateTODO(){
    this.api.updateTODO(this.todoSelected).subscribe(
      data => {
        this.todoSelected = data;
        this.component.getAllTODOS();
        this.todoSelected = {};
        this.component.disableAddButton = false;
        this.router.navigate(['/'])
      },
      error => 
      {
        console.log(error)
      }
    )
  }

  deleteTODO(){
    this.api.deleteTODO(this.todoSelected.id).subscribe(
      data => {
        this.component.getAllTODOS();
        this.todoSelected = {};
        this.component.disableAddButton = false;
        this.router.navigate(['/'])
      },
      error => 
      {
        console.log(error)
      }
    )
  }

  cancelTODO() {
    this.component.disableAddButton = false;
    this.router.navigate(['/'])
  }

}
