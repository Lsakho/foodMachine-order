import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private readonly _firestore: Firestore) {}

  async ajouterCommande(data: any)  {
    const docRef = doc(this._firestore, 'commande/' + Date.now());
    await setDoc(docRef,data);
  }
}
