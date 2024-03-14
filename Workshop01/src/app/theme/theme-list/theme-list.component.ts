import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/them';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemesListComponent implements OnInit{

  themes: Theme[] = [];

  constructor(private api: ApiService, private userService: UserService){};

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get userId(): string {
    return this.userService.user?.id || ''
  }

  ngOnInit(): void {
    this.api.getThemes().subscribe(themes => {
      this.themes = themes
    });
  }

  isSubscribed(theme: Theme) {
    
    const isSubscribedUser = theme.subscribers.find((s) => s === this.userId);

    return isSubscribedUser;
  }
}
