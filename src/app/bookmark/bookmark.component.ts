import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  bookmarks = [];
  getBookmarksdata() {
    const localStorageData = JSON.parse(localStorage.getItem('bookmarks'));
    if (localStorageData != null) {
      this.bookmarks = localStorageData;
    } else {
      ('No Bookmarks found!!!');
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.getBookmarksdata();
  }
}
