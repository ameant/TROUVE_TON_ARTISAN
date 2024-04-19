import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  private _url: string = '/assets/datas.json';

  constructor(private http: HttpClient) { }

  getArtisans() {
    return;
  }
}
