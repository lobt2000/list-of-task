import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  task: string;

  title = 'js-advance-hw12';
  taskLists: Array<any> = [{
    name: 'HTML5',
    status: true,
    process: 'Done'
  },
  {
    name: 'CSS3',
    status: true,
    process: 'Done'
  },
  {
    name: 'SCSS',
    status: false,
    process: 'In PROGRESS'
  },
  {
    name: 'JavaScript',
    status: false,
    process: 'In PROGRESS'
  },
  {
    name: 'jQuery',
    status: false,
    process: 'In PROGRESS'

  },
  {
    name: 'Angular',
    status: false,
    process: 'In PROGRESS'

  },
  ]
  addTask(): void {
    if (this.task.length !== 0) {
      const newTask = {
        name: this.task,
        status: false,
        process: 'In PROGRESS'
      }
      this.taskLists.push(newTask)
      this.task = '';
    }


  }

}
