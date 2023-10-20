import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  movieName: string = '';
  movie: any;

  constructor(private ms: MovieService) { }

  searchMovie() {
    this.ms.getSearchedMovie(this.movieName)
      .subscribe((data: any) => {
        this.movie = data;
      });
  }
}
