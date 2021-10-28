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
import { LayoutNewComponent } from './body/new/layout-new.component';
import { NewComponent } from './body/new/new.component';
import { PopularComponent } from './body/popular/popular.component';
import { ReleasesComponent } from './body/releases/releases.component';
import { RecentlyUpdatedComponent } from './body/recently-updated/recently-updated.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { BrowsePageComponent } from './body/browse-page.component';
import { StorePageComponent } from './body/store-page.component';
import { NewsPageComponent } from './body/news-page.component';
import { FaqPageComponent } from './body/faq-page.component';
import { HelpPageComponent } from './body/help-page.component';
import { AppRoutingModule } from './app-routing.module';
import { TopNavBarComponent2 } from './header-2/top-nav-bar-2.component';
import { NEWSComponent } from './body/NEWS-page/NEWS.component';
import { FAQComponent } from './body/FAQ-page/FAQ.component';
import { HELPComponent } from './body/HELP-page/HELP.component';
import { BrowseComponent } from './body/Browse-page/Browse.component';
import { LayoutRecentlyUpdatedComponent } from './body/recently-updated/layout-recently-updated.component';
import { HttpClientModule} from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { SignInComponent } from './body/SIGN-IN-page/SIGN-IN.component';
import { FormsModule } from '@angular/forms';
import { SignInPageComponent } from './body/sign-in-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBarComponent2,
    BottomNavBarComponent,
    CarouselComponent,
    CatalogComponent,
    FreeGamesComponent,
    NewComponent,
    PopularComponent,
    ReleasesComponent,
    RecentlyUpdatedComponent,
    ImportantComponent,
    BigImportantComponent,
    LayoutMainComponent,
    BodyLayoutComponent,
    LayoutImportantComponent,
    LayoutBigImportantComponent,
    LayoutNewComponent,
    BrowsePageComponent,
    StorePageComponent,
    NewsPageComponent,
    FaqPageComponent,
    HelpPageComponent,
    NEWSComponent,
    FAQComponent,
    HELPComponent,
    BrowseComponent,
    LayoutRecentlyUpdatedComponent,
    UserInfoComponent,
    SignInComponent,
    SignInPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
