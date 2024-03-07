import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/them';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit{

  themes: Theme[] = [];

  constructor(private api: ApiService){};

  ngOnInit(): void {
    this.api.getThemes().subscribe(themes => {
      this.themes = themes
    });
  }
}
