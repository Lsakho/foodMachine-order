import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { RestoCategoryInterface, recipeInterface } from '../datas.interface';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommandeService } from '../Service/commande/commande.service';
import { doc } from 'firebase/firestore';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})

export class OrderPageComponent implements OnInit {
  title = 'FoodMachine';
  orderForm!: FormGroup;
  group!: FormGroup;
  recipesCategories!: RestoCategoryInterface[];
  recipesDetail!: recipeInterface[]

  async ngOnInit(){
    
    const recipesCategories= await this.APIService.getRecipe();
    this.recipesCategories = recipesCategories;
    // const recipesDetail = await this.APIService.getRecipeDetail;
    // this.recipesDetail = recipesDetail;
              
    this.orderForm = new FormGroup({
      recipes: new FormArray([]),
      dateTime: new FormControl()
    });

  }
  displayCategoryDetails(category: RestoCategoryInterface) {
    console.log('Category Title:', category.title);
    console.log('Category Recipes:', category.recipes);
}


  private _addRecipeForm(recipeId: string, quantity: number){
    
    // get form Array control to add selected recipe
  const formArray  = this.orderForm.get('recipes') as FormArray;
  // add recipe array from
  //check if recipe already exist
  const index = (formArray.value as any[]).findIndex((r: {recipeId: string; quantity: number;})=> r.recipeId === recipeId)
  if (index >=0) {
    const quantityControler = formArray.at(index).get('quantity');
    if (quantityControler){
      quantityControler.setValue(quantityControler.value + quantity);
    }
  }else{
    // build group element with recipeId and quantity
    const group = new FormGroup({
      recipeId: new FormControl(recipeId, Validators.compose([
        Validators.required
      ])),
      quantity : new FormControl(quantity, Validators.compose([
       Validators.required 
      ])),
    });
    formArray.push(group);
  }
  
  //display result in console
  console.log(this.orderForm.value)
   
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Choix ajouté',
      duration: 2000, 
      position: 'bottom' 
    });
  
    toast.present();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
    return loading

  }
 


  async actions(event: { type: string; payload?: any }) {
    console.log(event);

    switch (true) {
        case event.type === 'selectCategory':
            console.log(event.type, event.payload);
            break;
      

        case event.type === 'add':
            const loading = await this.showLoading();

            this._addRecipeForm(event.payload.uuid, 1);
            await loading.dismiss()
            

            this.presentToast()
            
            break;

        case event.type === 'remove':
            // Traitez le cas de suppression ici
            break;

        case event.type === 'send-order':
            await this.CommandeService.ajouterCommande(this.orderForm.value);
            alert('Order successfully sent!');
            break;

        default:
            break;
    }
}

  constructor(
    private readonly APIService: APIService,
    private readonly CommandeService: CommandeService,
    private readonly toastController: ToastController,
    private readonly loadingCtrl: LoadingController
  ){}
 
 

  
}

