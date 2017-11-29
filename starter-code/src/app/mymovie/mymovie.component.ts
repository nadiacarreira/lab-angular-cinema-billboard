import { Component, OnInit } from '@angular/core';
import { movieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mymovie',
  templateUrl: './mymovie.component.html',
  styleUrls: ['./mymovie.component.css']
})
export class MymovieComponent implements OnInit {

  constructor(public service:movieService) { }


  ngOnInit() {
  }


}
