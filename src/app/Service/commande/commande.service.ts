import { Injectable } from '@angular/core';
import { Firestore, collectionData, query } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { collection, doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private readonly _firestore: Firestore,
            private readonly toastController: ToastController 
    ) {}

  async ajouterCommande(data: {
    recipes: {
      recipeId: string; 
      quantity: number
    }[]; 
    dateTime: Date
  })  {
    const docRef = doc(this._firestore, 'commande/' + Date.now());
    await setDoc(docRef,data);
  }
  loadData() {
    const refCollection = collection(this._firestore,'commande');
    const q = query(refCollection);
    const data = collectionData(q, {idField: 'id'});
    return data;
  }
  
  
}
