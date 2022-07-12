import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  { 
    path: '',
    component: UserSearchComponent,
    children: [
      { path: 'items', component: ResultSearchComponent },
      { path: 'items/:id', component: ProductDetailComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
