import { SiteHeaderComponent } from './site-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SiteHeaderComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [SiteHeaderComponent],
  entryComponents: [SiteHeaderComponent],
})
export class SiteHeaderModule { }
