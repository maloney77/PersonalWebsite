import { appRoutes } from './app-routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppComponent } from '../components/app-component/app.component';
import { MatIconModule } from '@angular/material/icon';
import { SiteHeaderComponent } from '../components/site-header/site-header.component';
import { SiteHeaderModule } from '../components/site-header/site-header.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { InfoPageComponent } from '../components/info-page/info-page.component';
import {InfoPageModule} from "../components/info-page/info-page.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SiteHeaderModule,
    InfoPageModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
