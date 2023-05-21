import { Component } from '@angular/core';
import { SharedService } from './shared.service';
import { Todo } from './todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  ar:Todo[]=[];

  constructor(private samp: SharedService){
    samp.getAllData().subscribe(res => {this.ar = res; console.log(this.ar)}); //like register to get result, when we get res => do something
    
  }

  delItem(id:number){
    this.samp.delData(id).subscribe(res => console.log('delete success'))
    this.samp.getAllData().subscribe(res => {this.ar = res; console.log(this.ar)});

  }

  addTodo(title:string, userId:number, completed:boolean){
    console.log(title, userId, completed)
    this.samp.addTodo(title, userId, completed).subscribe(res => console.log(res))
    this.samp.getAllData().subscribe(res => {this.ar = res; console.log(this.ar)});

  }

  updItem(id: number, title:string, userId:number, completed:boolean){
    console.log(title, userId, completed)
    this.samp.updTodo(id, title, userId, completed).subscribe(res => console.log(res))
    this.samp.getAllData().subscribe(res => {this.ar = res; console.log(this.ar)});

  }
}
