import { Injectable } from '@angular/core';
import { Auth, UserCredential, authState, signInWithPopup, signOut, GoogleAuthProvider } from '@angular/fire/auth';
import { } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class CuineAuthService {
  userCreds!: UserCredential;
  currentUser$ = authState(this._auth as any);

  constructor(
    private readonly _auth: Auth,
  ) { }

  async signinGoogle() {
    const provider = new GoogleAuthProvider();
    const userCreds = await signInWithPopup(this._auth, provider)
    this.userCreds = userCreds
  }
  async _signout() {
    await signOut(this._auth);
  }
}
