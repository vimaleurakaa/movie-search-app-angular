import { Component, OnInit, Input } from '@angular/core';

import { DataServices } from '../services/data.services';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movies = [];
  bookmarks = [];

  constructor(private dataService: DataServices) {}

  getBookmarks(movie) {
    const getBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    let foundAtPos = -1;

    if (getBookmarks == null) {
      this.bookmarks = [];
    } else {
      this.bookmarks = getBookmarks;
    }

    if (movie !== null) {
      console.log(this.bookmarks.length);

      for (let i = 0; i < this.bookmarks.length; i++) {
        if (this.bookmarks[i].imdbID == movie.imdbID) {
          foundAtPos = 1;
        }
      }

      if (foundAtPos > -1) {
        console.log('Movie already exist in bookmarks!!');
      } else {
        this.bookmarks.push(movie);
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
      }
    }
  }

  //thats heavy, probably more than 200mb

  @Input() moviedata;

  ngOnInit(): void {
    this.getBookmarks(null);
  }
}
