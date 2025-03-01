// src/app/task-list/task-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { TaskComponent } from '../task/task.component'; // Import TaskComponent, which will be used in TaskListComponent

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [CommonModule, TaskComponent] // Import TaskComponent so it can be used here
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true }
  ];
}
