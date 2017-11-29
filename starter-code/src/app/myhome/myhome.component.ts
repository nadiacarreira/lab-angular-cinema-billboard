import { Component, OnInit } from '@angular/core';
import { movieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css'],
  providers: [movieService]
})
export class MyhomeComponent implements OnInit {
  constructor(public service:movieService, private router: Router) { }

  ngOnInit() {
  }
  getMovies(){
    this.service.getMovie(this.service.movies);
  }
  viewDetails(id) {
    this.router.navigate(['movies', id]);
  }
}
