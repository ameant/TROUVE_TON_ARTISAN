import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  faStar = faStar;

  topArtisans: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getTopArtisans();
  }

  getTopArtisans(): void {
    this.dataService.getTopArtisans().subscribe((artisans) => {
      this.topArtisans = artisans;
    });
  }
}
