import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faBars = faBars;

  categories$: Observable<string[]> | null = null;
  search: string = '';
  artisans: any[] = [];
  searchResults: any[] = [];
  searchResultsVisible: boolean = false;
  showLinks: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.categories$ = this.dataService.getCategories();
    this.dataService.getArtisans().subscribe((artisans) => {
      this.artisans = artisans;
    });
    document.body.addEventListener('click', (event: MouseEvent) => {
      this.handleOutsideClick(event);
    });
  }

  goToCategory(category: string): void {
    this.router.navigate(['/liste', category]);
  }

  filterResults() {
    // Filtrer les résultats en fonction de la valeur saisie dans le champ de recherche
    this.searchResults = this.artisans.filter(
      (artisan) =>
        artisan.name.toLowerCase().includes(this.search.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(this.search.toLowerCase()) ||
        artisan.location.toLowerCase().includes(this.search.toLowerCase())
    );
    this.searchResultsVisible = true;
  }

  selectResult(selectedName: string) {
    // Recherchez l'objet artisan correspondant au nom sélectionné
    const selectedArtisan = this.searchResults.find(
      (artisan) => artisan.name === selectedName
    );
  }

  // Méthode pour gérer les clics en dehors de la liste des résultats
  handleOutsideClick(event: MouseEvent) {
    if (this.searchResultsVisible) {
      const target = event.target as HTMLElement;
      if (!target.closest('.search-results')) {
        this.searchResultsVisible = false;
      }
    }
  }

  handleLinkClick() {
    this.searchResultsVisible = false;
  }

  toggleMenu() {
    this.showLinks = !this.showLinks;
  }
}
