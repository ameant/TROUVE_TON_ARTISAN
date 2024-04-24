import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../artisan.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  faStar = faStar;

  topArtisans: any[] = [];

  constructor(private artisanService: ArtisanService) { }

  ngOnInit(): void {
    this.getTopArtisans();
  }

  getTopArtisans(): void {
    this.artisanService.getTopArtisans().subscribe(
      artisans => {
        this.topArtisans = artisans;
      }
    );
  }
}