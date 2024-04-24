import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private artisansUrl = './assets/datas.json';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.http.get<any[]>(this.artisansUrl).pipe(
      map(artisans => {
        const categories = artisans.map(artisan => artisan.category);
        return [...new Set(categories)];
      })
    );
  }

  getTopArtisans(): Observable<any[]> {
    return this.http.get<any[]>(this.artisansUrl).pipe(
      map(artisans => artisans.filter(artisan => artisan.top))
    );
  }

  getArtisansByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(this.artisansUrl).pipe(
      map(artisans => artisans.filter(artisan => artisan.category === category))
    );
  }
}