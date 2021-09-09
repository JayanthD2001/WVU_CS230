import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { MidNavBarComponent } from './middle/mid-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    MidNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }