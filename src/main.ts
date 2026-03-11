import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { AppComponent } from './app/app.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { PageIndexComponent } from './app/page-index/page-index.component';
import { PageAboutComponent } from './app/page-about/page-about.component';
import { PageNewsComponent } from './app/page-news/page-news.component';

const appRoutes = [
  { path: 'index', component: PageIndexComponent },
  { path: 'about', component: PageAboutComponent },
  { path: 'news', component: PageNewsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' as const },
  { path: '**', component: PageNotFoundComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(withFetch())
  ]
}).catch(err => console.error(err));
