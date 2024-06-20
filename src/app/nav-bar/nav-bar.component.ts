import { NgClass } from '@angular/common';
import { Component,  } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, } from '@angular/router';
import {MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgClass,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  constructor(route: Router) {}
  isOpen = true;

  tooblebtn() {
    this.isOpen = !this.isOpen;
  }
  getHome() {
    const doc = document.getElementById('home')?.scrollTop; 
  }
  getAbout() {
    const doc = document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  getProjects() {
    const doc = document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  getContact() {
    const doc = document.getElementById('contacts')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}