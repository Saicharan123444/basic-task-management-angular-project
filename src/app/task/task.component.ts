// src/app/task/task.component.ts

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Task } from '../task.model';  // Import Task model

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: true,  // Mark the component as standalone
  imports: [CommonModule]  // Add CommonModule here to access ngClass and ngFor
})
export class TaskComponent {
  @Input() task: Task | undefined;

  toggleCompletion() {
    if (this.task) {
      this.task.completed = !this.task.completed;
    }
  }
}
