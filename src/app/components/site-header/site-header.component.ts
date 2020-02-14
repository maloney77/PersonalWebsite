import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-site-header',
  template: `
    <mat-toolbar class="site-header mat-elevation-z6">
      <div class="site-header_element-container">
        <div class="site-header_home-button-container">
         <a routerLink="" routerLinkActive="active">
          <button mat-button class="site-header_home-button">Home</button>
         </a>
        </div>
      </div>
      <div class="site-header_info-button-container">
         <a routerLink="/info-page" routerLinkActive="active">
          <button mat-button class="site-header_info-button">Info</button>
         </a>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
