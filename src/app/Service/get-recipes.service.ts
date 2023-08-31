import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRecipesService {

  constructor(
    private readonly _http: HttpClient
  ) { 
  }

  async getRecipe() {
    const url = 'assets/resto-data.json'; // Le chemin relatif à partir du dossier "assets"
    const request = this._http.get(url);
    const response = await firstValueFrom(request);
    return response;
  }
}
