import { Component, OnInit } from '@angular/core';
import { MeliService } from '../../services/meli.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IAppState } from '../../../../core/store/state/app.state';
import { Store } from '@ngrx/store';
import { LoadCategorySuccess } from '../../../../core/store/actions/categories.action';
import { Item } from '../../models/item.entity';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {

  data = new Array<Item>();
  processProductsFinish = false;
  alertTitle = 'No hay publicaciones que coincidan con tu búsqueda';
  alertSubtitle = 'Verifica que hayas escrito correctamente!';

  constructor(
    private _meliService: MeliService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _store: Store<IAppState>,
    private titleService: Title
  ) { }

  /* Nos suscribimos al cambio de parámetros para actualizar la ruta en caso de un refresco de la página */
  ngOnInit(): void {
    this.titleService.setTitle('Resultado de búsqueda | Meli');
    this._route.queryParamMap
      .subscribe((paramsMap) => {
        this.getProducts(paramsMap['params'].search);
      }
    );
  }

  /* Obtenemos el listado de productos desde el endpoint de Mercado Libre para acondicionar la vista con solo 4 items */
  getProducts(search: string) {
    this.clearForm();
    this._meliService.getProducts(search).then(
      (res) => {
        this._store.dispatch(new LoadCategorySuccess(res.categories));
        for (let i = 0; i < res.items.length; i++) {
          if (i < 4) {
            this.data.push(res.items[i]);
          } else {
            break;
          }
        }
        this.processProductsFinish = true;
      }
    ).catch(
      err => {
        this.processProductsFinish = true;
      }
    )
  }

  /* Redirección a la vista de detalle del producto con ID */
  goToProductDetail(productId: string) {
    this._router.navigate([`/items/${productId}`]);
  }

  /* Limpieza de variables */
  clearForm() {
    this.data = [];
    this.processProductsFinish = false;
  }

}
