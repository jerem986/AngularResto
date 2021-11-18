import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoryDetail, CategoryModel } from 'src/app/Model/Category.model';
import { CategoryService } from 'src/app/Service/Category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [MessageService]
})
export class CategoryComponent implements OnInit {

  selectedItem!: CategoryDetail

  listCategory! : CategoryDetail[]
  Validate! : boolean
  CategoryAddName : CategoryModel = {category : ""}
  tempId!: number

  constructor(
    private _catService : CategoryService,
    private _messageService : MessageService
  ) {
    this.allCategory();
   }

  ngOnInit(): void {
  }

  addCategory(){
    this._catService.AddCategory(this.CategoryAddName).subscribe( () => this.allCategory())
  }


  UpDateCategory(model : CategoryDetail){
    this._catService.UpdateCategory(model).subscribe(data => this.Validate = data)
    //TO DO toaster validation
  }

  allCategory(){
    this._catService.GetCategory().subscribe(data => this.listCategory = data)
  }

  deleteCategory(){
    this._catService.DeleteCategory(this.tempId).subscribe(data => {
      console.log("on se le tente")
      this.Validate = data
      this.allCategory()
    })
    //TO DO implement toaster validation delete???
  }

  onConfirm() {

    this._messageService.clear();
    this.deleteCategory() 
  }

  onReject() {
    this._messageService.clear();
  }

  submit(id : number){
    this.tempId = id
    this._messageService.add({summary: 'Delete', detail:'Êtes-vous sur de vouloir supprimer cette catégorie', key : 'valid',})
  }
}
