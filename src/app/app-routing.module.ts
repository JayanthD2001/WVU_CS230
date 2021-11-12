import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BrowsePageComponent } from './body/browse-page.component';
import { FaqPageComponent } from './body/faq-page.component';
import { HelpPageComponent } from './body/help-page.component';
import { NewsPageComponent } from './body/news-page.component';
import { SignINComponent } from './body/SIGN-IN-page/SIGN-IN.component';
import { SignUPPageComponent } from './body/sign-up-page.component';
import { StorePageComponent } from './body/store-page.component';


const routes: Routes = [
  {path: '', component: StorePageComponent},
  {path: 'store-page', component: StorePageComponent},
  {path: 'news-page', component: NewsPageComponent},
  {path: 'faq-page', component: FaqPageComponent},
  {path: 'help-page', component: HelpPageComponent},
  {path: 'browse-page', component: BrowsePageComponent},
  {path: 'sign-up-page', component: SignUPPageComponent},
  {path: 'sign-in-page', component: SignINComponent},
  {path: 'auth', component: AuthComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
