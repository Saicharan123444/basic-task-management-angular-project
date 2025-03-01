// src/app/task-list/task-list.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { TaskComponent } from '../task/task.component'; // Import TaskComponent
import { Task } from '../task.model'; // Import Task model

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,  // Mark as standalone component
  imports: [CommonModule, TaskComponent]  // Import CommonModule and TaskComponent
})
export class TaskListComponent {
  tasks: Task[] = [
    new Task(1, 'Learn Angular', false),
    new Task(2, 'Build a project', true),
    new Task(3, 'Review documentation', false)
  ];

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }
}
