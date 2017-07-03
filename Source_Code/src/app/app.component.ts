import { Component } from '@angular/core';
import { TodoService } from "./services/todo.service";
import { Headers , HttpModule  ,Http} from "@angular/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
