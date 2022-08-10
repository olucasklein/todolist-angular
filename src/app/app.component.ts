import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'To-Do List';

  tasks: any = [new Task('Estudar Angular'), new Task('Testar o app')];

  addTask(task: string) {
    this.tasks.push(new Task(task));
  }
}
