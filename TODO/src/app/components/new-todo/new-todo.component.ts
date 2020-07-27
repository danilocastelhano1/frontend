import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

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
  }

  createTODO() {
    if (isNullOrUndefined(this.todoSelected.conteudo)) {
      alert("Campo Conteúdo está Vazio");
      return;
    }

    if (isNullOrUndefined(this.todoSelected.is_completo)) {
      alert("Campo Completo está Vazio");
      return;
    }

    this.api.createTODO(this.todoSelected).subscribe(
      data => {
        this.component.getAllTODOS();
        this.todoSelected = {};
        this.component.disableAddButton = false;
        this.router.navigate(['/'])
      },
      error => {
        console.log(error)
      }
    )
  }

  cancelTODO() {
    this.component.disableAddButton = false;
    this.router.navigate(['/'])
  }
}
