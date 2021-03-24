import { Component, OnInit, Input } from '@angular/core';

import { DataServices } from '../services/data.services';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  private index: number = 0;

  movies = [];
  bookmarks = [];

  constructor(
    private dataService: DataServices,
    private toastrService: NbToastrService
  ) {}

  //Successfully added toast
  showToast(position, status, movie) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `${movie.Title} added to bookmark.`,
      {
        position,
        status,
      }
    );
  }

  //already exist in bookmark toast
  warningToast(position, status, movie) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `${movie.Title} already exist in bookmark!`,
      {
        position,
        status,
      }
    );
  }

  getBookmarks(movie) {
    movie.active = !movie.active;
    const getBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    let foundAtPos = -1;

    if (getBookmarks == null) {
      this.bookmarks = [];
    } else {
      this.bookmarks = getBookmarks;
    }

    if (movie !== null) {
      for (let i = 0; i < this.bookmarks.length; i++) {
        if (this.bookmarks[i].imdbID == movie.imdbID) {
          foundAtPos = 1;
        }
      }

      if (foundAtPos > -1) {
        this.warningToast('top-right', 'danger', movie);
      } else {
        this.showToast('top-right', 'primary', movie);
        this.bookmarks.push(movie);
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
      }
    }
  }

  @Input() moviedata;

  ngOnInit(): void {
    this.getBookmarks(null);
  }
}
