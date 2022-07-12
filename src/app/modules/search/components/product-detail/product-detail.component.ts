import { Component, OnInit } from '@angular/core';
import { MeliService } from '../../services/meli.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Item } from '../../models/item.entity';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  data : Item;
  processProductsFinish = false;
  alertTitle = 'Lo sentimos no encontramos información!';
  alertSubtitle = '';

  constructor(
    private _meliService: MeliService,
    private _router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  /* Nos suscribimos a los parámetros de la ruta para actualizar la búsqueda en caso de ingresarla manualmente */
  ngOnInit(): void {
    this.titleService.setTitle('Detalle del producto | Meli');
    this.route.params.subscribe(
      (params: Params) => {
        this.getProductDetail(params.id);
        this.alertSubtitle = `No se encontró ningún tipo de información con el ID ${params.id}`;
      }
    );
  }

  /* Se obtiene el detalle del producto mediante el servicio de Mercado Libre a través del ID del mismo producto */
  getProductDetail(itemId: string) {
    this._meliService.getProductDetail(itemId).then(
      (res) => {
        this.data = res.items;
        this.processProductsFinish = true;
      }
    ).catch(
      err => {
        this.processProductsFinish = true;
      }
    )
  }

}
