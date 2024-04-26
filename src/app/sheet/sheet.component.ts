import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent implements OnInit {
  artisan: any; // Objet artisan pour stocker les informations récupérées

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const artisanId = params.get('id');
      // Vérifiez si artisanId n'est pas null avant de l'utiliser
      if (artisanId !== null) {
        this.dataService.getArtisanById(artisanId).subscribe(artisan => {
          this.artisan = artisan;
        });
      }
    });
  }
}