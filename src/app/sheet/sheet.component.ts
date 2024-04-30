import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent implements OnInit {
  artisan: any; // Objet artisan pour stocker les informations récupérées
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const artisanId = params.get('id');
      // Vérifiez si artisanId n'est pas null avant de l'utiliser
      if (artisanId !== null) {
        this.dataService.getArtisanById(artisanId).subscribe(artisan => {
          this.artisan = {
            ...artisan,
            stars: this.calculateStars(artisan.note)
          };
        });
      }
    });
  }

  calculateStars(note: number): number {
    if (note >= 4.8) {
      return 5;
    } else if (note >= 4.3 && note < 4.8) {
      return 4.5;
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