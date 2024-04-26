import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  categories$: Observable<string[]> | null = null;
  search: string = '';
  artisans: any[] = [];
  searchResults: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.categories$ = this.dataService.getCategories();
    this.dataService.getArtisans().subscribe(artisans => {
      this.artisans = artisans;
    });
  }

  goToCategory(category: string): void {
    this.router.navigate(['/liste', category]);
  }

  filterResults() {
    // Filtrer les résultats en fonction de la valeur saisie dans le champ de recherche
    this.searchResults = this.artisans.filter(artisan => 
      artisan.name.toLowerCase().includes(this.search.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(this.search.toLowerCase()) ||
      artisan.location.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  selectResult(selectedName: string) {
  // Recherchez l'objet artisan correspondant au nom sélectionné
  const selectedArtisan = this.searchResults.find(artisan => artisan.name === selectedName);
  // Faites quelque chose avec l'artisan sélectionné, par exemple, redirigez vers une page détaillée
}
}