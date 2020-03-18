import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingHeadComponent } from './components/landing-head/landing-head.component';
import {ButtonsModule, NavbarModule} from 'angular-bootstrap-md';
import { LandingContentComponent } from './components/landing-content/landing-content.component';
import { ContentMenuComponent } from './components/landing-content/components/content-menu/content-menu.component';
import { RouterModule } from '@angular/router';
import { ServiceBlockComponent } from './components/landing-content/components/service-block/service-block.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingHeadComponent,
    LandingContentComponent,
    ContentMenuComponent,
    ServiceBlockComponent,
    LandingFooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    NavbarModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
