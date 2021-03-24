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

  deleteItem(item) {
    let index;
    index = this.bookmarks.findIndex(
      (element) => element.imdbID === item.imdbID
    );
    if (index > -1) {
      this.bookmarks.splice(index, 1);
      localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
      return;
    } else {
      console.log('not found');
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.getBookmarksdata();
  }
}
