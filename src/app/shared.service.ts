import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //for call to server (similar to axios in react) 
import { Observable } from 'rxjs'; //observable observes (expects) if there is an answer from the server, then publishes that there is an answer (like res)
import { Todo } from './todos';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  MY_Server = "http://localhost:5000/todos"

  constructor(private http: HttpClient) { }   //call to server

  getAllData(): Observable<Todo[]>{ //I declare that the return type is observable (a promise), and if there is an answer then the answer type is any
    return this.http.get<Todo[]>(this.MY_Server)
  }

  delData(id:number): Observable<any>{ //I declare that the return type is observable (a promise), and if there is an answer then the answer type is any
    const delUrl = this.MY_Server +"/" + id
    console.log(delUrl);
    return this.http.delete<any>(delUrl)
  }

  addTodo(title:string, userId:number, completed:boolean): Observable<Todo>{ //I declare that the return type is observable (a promise), and if there is an answer then the answer type is any
    return this.http.post<Todo>(this.MY_Server, {title, userId, completed})
  }

  updTodo(id:number, title:string, userId:number, completed:boolean): Observable<Todo>{ //I declare that the return type is observable (a promise), and if there is an answer then the answer type is any
    const delUrl = this.MY_Server +"/" + id
    return this.http.put<Todo>(delUrl, {title, userId, completed})
  }
}
