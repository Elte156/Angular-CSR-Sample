import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageNewsComponent } from './page-news/page-news.component';

const appRoutes: Routes = [
  { path: 'index', component: PageIndexComponent },
  { path: 'about', component: PageAboutComponent },
  { path: 'news', component: PageNewsComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageIndexComponent,
    PageAboutComponent,
    PageNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
