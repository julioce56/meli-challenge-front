import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserSearchComponent,
    ResultSearchComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SearchModule { }
