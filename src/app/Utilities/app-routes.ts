import { AppComponent } from '../components/app-component/app.component';
import { InfoPageComponent } from '../components/info-page/info-page.component';
import { SiteHeaderComponent } from '../components/site-header/site-header.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [

  { path: '',
     component: InfoPageComponent,
  }
];
