import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemesRoutingModule } from './theme-routing.module';
import { ThemesListComponent } from './theme-list/theme-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CurrentThemeComponent,
    ThemesListComponent,
    PostsListComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule,
    SharedModule
  ]
})
export class ThemesModule { }
