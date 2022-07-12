import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment, NavigationEnd, NavigationStart } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../core/store/state/app.state';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  @ViewChild('searchInp') searchInp: ElementRef;
  categories = [];
  showImage = true;
  formSearch: FormGroup;

  constructor(
    private _router: Router,
    private _store: Store<IAppState>,
    private _route: ActivatedRoute,
    private titleService: Title,
    private fb: FormBuilder
  ) {
    this.titleService.setTitle('Buscar productos | Meli');
    setTimeout(() => {
      this.searchInp.nativeElement.focus();
    }, 1000);
    this._store.select(state => state.categories.data).subscribe(
      cat => {
        if (cat) {
          this.clearForm();
          this.categories = [...cat];
        }
      }
    )
  }

  /* Se realiza subscripciones a los eventos de las rutas para condicionar el manejo de la vista y los parámetros */
  ngOnInit(): void {
    if (this._router.url !== '/') this.showImage = false;
    this.Builder();
    this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/') {
          this.clearForm();
          this.showImage = true;
          this.titleService.setTitle('Buscar productos | Meli');
        } else {
          this.showImage = false;
        }
      }
    });
    this._route.queryParamMap
      .subscribe((paramsMap) => {
        this.formSearch.patchValue({
          search: paramsMap['params'].search
        });
      }
    );
  }

  /* Se crea el formulario reactivo */
  private Builder() {
    this.formSearch = this.fb.group({
      search: ['', [Validators.required]]
    });
  }

  /* Redirección a la vista de productos */
  goToSearch(searchFromLink?: string) {
    if (searchFromLink) {
      this.formSearch.patchValue({
        search: searchFromLink
      });
    }
    if (this.formSearch.valid) {
      this._router.navigate(['/items'], { queryParams: { search: this.formSearch.value.search } });
    }
  }

  /* Limpieza de variables */
  clearForm() {
    this.categories = [];
  }

}
