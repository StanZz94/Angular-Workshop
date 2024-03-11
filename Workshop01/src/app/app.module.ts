import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostsListComponent,
    ThemeListComponent,
    HomeComponent,
    AddThemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
