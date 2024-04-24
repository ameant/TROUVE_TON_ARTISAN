import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../artisan.service';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  artisans: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.artisanService.getArtisansByCategory(category).subscribe(
          artisans => {
            this.artisans = artisans.map(artisan => ({
              ...artisan,
              stars: this.calculateStars(artisan.note)
            }));
          }
        );
      }
    });
  }

  calculateStars(note: number): number {
    if (note >= 4.8) {
      return 5;
    } else if (note >= 4.3 && note < 4.8) {
      return 4.5; // Cinquième étoile à moitié remplie
    } else if (note >= 3.8 && note < 4.3) {
      return 4; // Cinquième étoile vide
    } else {
      return Math.round(note);
    }
  }

  starsArray(numStars: number): any[] {
    const fullStars = Math.floor(numStars);
    const halfStar = numStars - fullStars === 0.5;
  
    let stars = Array(fullStars).fill(0);
    
    if (halfStar) {
      stars.push('half');
    }
  
    return stars;
  }
}  