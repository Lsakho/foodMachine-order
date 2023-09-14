import { Component } from '@angular/core';
import { CuineAuthService } from '../Service/Auth/cuine-auth.service';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.scss']
})
export class CuisineComponent {
  constructor(
    private readonly _cuisineService: CuineAuthService
  ){}

  async signinGoogle(){
    await this._cuisineService.signinGoogle()
  }
  async signOut(){
    await this._cuisineService._signout()
  }
}
