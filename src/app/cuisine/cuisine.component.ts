import { Component, OnInit } from '@angular/core';
import { CuineAuthService } from '../Service/Auth/cuine-auth.service';
import {Auth, GoogleAuthProvider, signOut, signInWithPopup, authState } from '@angular/fire/auth';
import {Observable, switchMap, of } from 'rxjs'
import { CommandeService } from '../Service/commande/commande.service';
import { APIService } from '../api.service';
import { recipeInterface } from '../datas.interface';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.scss']
})

export class CuisineComponent {
  user$= authState(this._auth as any);
  datas$: Observable<any[]> = this.user$.pipe(
    switchMap((user) => {
      console.log('Mise à jour de l\'observable datas... Auth', user);
      if (user) {
        return this._commandeServive.loadData(); 
      } else {
        return of([]); 
      }
    })
  );
  constructor(
    private readonly _auth: Auth,
    private readonly _cuisineService: CuineAuthService,
    private readonly _commandeServive: CommandeService,
    private readonly _apiService: APIService
  ){}
  async displayCommandeDetails(commande: {id: string; recipes: {recipeId: string;}[]  }) {
    const categories = await this._apiService.getRecipe();
    const detail= commande.recipes.map(recette =>{
      const categorie = categories.find(c => c.recipes.find(r => r.uuid === recette.recipeId))
      return categorie?.recipes.find(r => r.uuid === recette.recipeId)
    })
    console.log('commande', commande);
    console.log('detail:', detail);
}
  async actions(type: string, payload?:any) {
    switch (true) {
      case type === 'signin':
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(this._auth, provider);
        console.log(result);
        break;
      case type === 'signout':
        await signOut(this._auth);
        console.log('User signed out');
        break;
      case type === 'displayCommandeDetails':
          this.displayCommandeDetails( payload);
        break;

      default:
        break;
    }
  }
}
