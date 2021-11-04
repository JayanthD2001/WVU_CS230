import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowsePageComponent } from './body/browse-page.component';
import { FaqPageComponent } from './body/faq-page.component';
import { HelpPageComponent } from './body/help-page.component';
import { NewsPageComponent } from './body/news-page.component';
import { SignUPPageComponent } from './body/sign-up-page.component';
import { StorePageComponent } from './body/store-page.component';


const routes: Routes = [
  {path: '', component: StorePageComponent},
  {path: 'store-page', component: StorePageComponent},
  {path: 'news-page', component: NewsPageComponent},
  {path: 'faq-page', component: FaqPageComponent},
  {path: 'help-page', component: HelpPageComponent},
  {path: 'browse-page', component: BrowsePageComponent},
  {path: 'sign-up-page', component: SignUPPageComponent}  
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
