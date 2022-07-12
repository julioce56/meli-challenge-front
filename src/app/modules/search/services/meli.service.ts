import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Product } from '../models/product.entity';
import { ProductDetail } from '../models/product-detail.entity';

@Injectable({
  providedIn: 'root'
})
export class MeliService {

  public apiUrl = environment.api;

  constructor(
    private _http: HttpClient
  ) { }

  /* Obtenemos mediante protocolo GET los productos asociados a la consulta */
  getProducts(item: string): Promise<Product> {
    return this._http.get<Product>(`${this.apiUrl}items?q=${item}`).toPromise();
  }

  /* Obtenemos mediante protocolo GET el detalle del producto mediante su respectivo ID */
  getProductDetail(itemId: string): Promise<ProductDetail> {
    return this._http.get<ProductDetail>(`${this.apiUrl}items/${itemId}`).toPromise();
  }
}
