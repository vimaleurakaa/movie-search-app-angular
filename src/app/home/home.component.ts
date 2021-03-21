import { Component, OnInit } from '@angular/core';
import { DataServices } from '../services/data.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchTitle;
  movieList = [];
  name = 'bruce wayne';
  constructor(private dataService: DataServices) {}

  searchMovie(title) {
    this.dataService
      .findMovieBytitle(title)
      .then((result) => (this.movieList = result.Search));
  }

  ngOnInit(): void {}
}
