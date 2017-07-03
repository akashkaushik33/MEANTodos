import { Injectable } from '@angular/core';
import { HttpModule , Headers ,Http } from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class TodoService {

  constructor(public _http:Http) {

   }

   getTodos(){
     return this._http.get('/api/v1/todos');
   }
   

   saveTodo(todo){
     var headers = new Headers();
     headers.append('Content-Type' , 'application/json');
     return this._http.post('/api/v1/todo' , JSON.stringify(todo) , {headers : headers})
     .map(res => res.json());
   }

    updateTodo(todo){
     var headers = new Headers();
     headers.append('Content-Type' , 'application/json');
     return this._http.put('/api/v1/todo/'+todo._id , JSON.stringify(todo) , {headers : headers});
     
   }

   deleteTodo(id:any){
     return this._http.delete('/api/v1/todo/'+id);
   }
}
