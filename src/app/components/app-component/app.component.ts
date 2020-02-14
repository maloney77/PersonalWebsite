import {Component, OnInit} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  template: `
    <div class="app_container">
      <app-site-header class="app_site-header"></app-site-header>
      <router-outlet></router-outlet>
    </div>
    
    
   `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
