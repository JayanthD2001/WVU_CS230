import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BigImportantComponent } from './body/big-important/big-important.component';
import { LayoutBigImportantComponent } from './body/big-important/layout-big-important.component';
import { BodyLayoutComponent } from './body/body-layout.component';
import { CarouselComponent } from './body/carousel/carousel.component';
import { CatalogComponent } from './body/catalog/catalog.component';
import { FreeGamesComponent } from './body/free-games/free-games.component';
import { ImportantComponent } from './body/important/important.component';
import { LayoutImportantComponent } from './body/important/layout-important.component';
import { NewComponent } from './body/new/new.component';
import { PopularComponent } from './body/popular/popular.component';
import { ReleasesComponent } from './body/releases/releases.component';
import { UpdatedComponent } from './body/updated/updated.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutMainComponent } from './layout/layout-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    CarouselComponent,
    CatalogComponent,
    FreeGamesComponent,
    NewComponent,
    PopularComponent,
    ReleasesComponent,
    UpdatedComponent,
    ImportantComponent,
    BigImportantComponent,
    LayoutMainComponent,
    BodyLayoutComponent,
    LayoutImportantComponent,
    LayoutBigImportantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
