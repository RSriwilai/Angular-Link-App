import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

const appRoute: Routes = [{ path: '', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  declarations: [AppComponent, ArticleComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
