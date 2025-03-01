// src/app/header/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true, // Mark this as a standalone component
  imports: [CommonModule] // Add dependencies like CommonModule for directives such as ngFor, ngIf
})
export class HeaderComponent {}
