import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisanService } from '../artisan.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  categories$: Observable<string[]> | null = null;

  constructor(
    private artisanService: ArtisanService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Récupérer les catégories uniques depuis le service Artisan
    this.categories$ = this.artisanService.getCategories();
  }

  goToCategory(category: string): void {
    this.router.navigate(['/list', category]);
  }
}