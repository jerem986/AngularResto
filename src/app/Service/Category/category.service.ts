import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDetail, CategoryModel } from 'src/app/Model/Category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url : string = environment.urlApi+"Category"

  constructor(
    private _client : HttpClient
  ) { }

  AddCategory(model : CategoryModel) : Observable<number> {
    return this._client.post<number>(this.url , model)
  }

  GetCategory() : Observable<CategoryDetail[]>{
    return this._client.get<CategoryDetail[]>(this.url)
  }

  GetCategoryById ( id : number) : Observable<CategoryDetail> {
    return this._client.get<CategoryDetail>(this.url + id)
  }

  DeleteCategory ( id : number) : Observable<boolean>{
    return this._client.delete<boolean>(this.url+"?id="+id)
  }

  UpdateCategory (category : CategoryDetail) : Observable<boolean>{
    return this._client.put<boolean>(this.url, category)
  }
}
