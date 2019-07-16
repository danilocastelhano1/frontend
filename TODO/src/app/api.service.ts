import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlBase = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) 
  { 
    
  } 

  getAllTODOS(): Observable<any>
  {
    return this.http.get(this.urlBase+'/TODO/', {headers: this.httpHeaders});
  }

  getOneTODO(id): Observable<any>
  {
    return this.http.get(this.urlBase+'/TODO/'+id+'/', {headers: this.httpHeaders});
  }

  updateTODO(todo): Observable<any>
  {
    if(isNullOrUndefined(todo.conteudo))
    {
      alert("Campo Conteúdo está Vazio");
      return;
    }

    if(isNullOrUndefined(todo.is_completo))
    {
      alert("Campo Completo está Vazio");
      return;
    }      
    const body = {conteudo: todo.conteudo , is_completo: todo.is_completo };
    //var body2 = JSON.stringify(body);
    console.log(this.urlBase+'/TODO/'+todo.id+'/'+body);
    return this.http.put(this.urlBase+'/TODO/'+todo.id+'/', body, {headers: this.httpHeaders});    
  }  

  createTODO(todo): Observable<any>
  {
    if(isNullOrUndefined(todo.conteudo))
    {
      alert("Campo Conteúdo está Vazio");
      return;
    }

    if(isNullOrUndefined(todo.is_completo))
    {
      alert("Campo Completo está Vazio");
      return;
    }    
    
    const body = {conteudo: todo.conteudo , is_completo: todo.is_completo };
    var body2 = JSON.stringify(body);
    //console.log(this.urlBase+'/TODO/'+body2);
    return this.http.post(this.urlBase+'/TODO/', body, {headers: this.httpHeaders});  
  } 

  deleteTODO(id): Observable<any>
  {    
    return this.http.delete(this.urlBase+'/TODO/'+id+'/', {headers: this.httpHeaders});
  }   
}
