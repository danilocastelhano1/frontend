import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  title = 'TODO';
  TODOS;
  TODO_SELECIONADO;
  data;

  constructor(private api: ApiService)
  {
    this._getAllTODOS();
    this.TODO_SELECIONADO = {id: null, conteudo: null, is_concluido: null };    
  }

  _getAllTODOS = () =>
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

  _TODO_SELECIONADO =(TODOS) =>
  {
    this.api.getOneTODO(TODOS.id).subscribe(
      data => {
        this.TODO_SELECIONADO = data;
      },
      error => 
      {
        console.log(error)
      }
    )
  }

  _updateTODO = () =>
  {
    this.api.updateTODO(this.TODO_SELECIONADO).subscribe(
      data => {
        this.TODO_SELECIONADO = data;
        this._getAllTODOS();
        this.TODO_SELECIONADO = {id: null, conteudo: null, is_concluido: null };
      },
      error => 
      {
        console.log(error)
      }
    )
  }

  _createTODO = () =>
  {
    this.api.createTODO(this.TODO_SELECIONADO).subscribe(
      data => {
        //this.TODOS.push(data);
        this._getAllTODOS();
        this.TODO_SELECIONADO = {id: null, conteudo: null, is_concluido: null };
      },
      error => 
      {
        console.log(error)
      }
    )
  }  

  _deleteTODO = () =>
  {
    this.api.deleteTODO(this.TODO_SELECIONADO.id).subscribe(
      data => {
        this._getAllTODOS();
        this.TODO_SELECIONADO = {id: null, conteudo: null, is_concluido: null };
      },
      error => 
      {
        console.log(error)
      }
    )
  }
  
  
}
