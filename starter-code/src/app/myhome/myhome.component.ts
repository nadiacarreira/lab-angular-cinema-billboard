import { Component, OnInit } from '@angular/core';
import { movieService } from '../services/movie.service';


@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css'],
  providers: [movieService]
})
export class MyhomeComponent implements OnInit {
  constructor(public service:movieService) { }

  ngOnInit() {
  }
  getMovies(){
    this.service.getMovie(this.service.movies);

  }
}
