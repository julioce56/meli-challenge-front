import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ResultSearchComponent } from './result-search.component';
import { MeliService } from '../../services/meli.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../../../../core/store/reducers/app.reducer';
import { Product } from '../../models/product.entity';
import { Author } from '../../models/author.entity';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('ResultSearchComponent', () => {
  let component: ResultSearchComponent;
  let fixture: ComponentFixture<ResultSearchComponent>;
  let meliService: MeliService;
  let titleService: Title;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSearchComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot(appReducer)
      ],
      providers: [
        MeliService,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSearchComponent);
    component = fixture.componentInstance;
    meliService = fixture.debugElement.injector.get(MeliService);
    titleService = fixture.debugElement.injector.get(Title);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check title changed', () => {
    component.ngOnInit();
    expect(titleService.getTitle()).toEqual('Resultado de búsqueda | Meli');
  });

  it('meli service is called in getProducts() method', () => {
    spyOn(meliService, 'getProducts').and.returnValue(Promise.resolve(new Product(new Author('Julio', 'Arroyave'), [], [])));
    component.getProducts('iphone');
    expect(meliService.getProducts).toHaveBeenCalled();
  });

  it('Check clearForm() method is working', () => {
    component.clearForm();
    expect(component.data).toEqual([]);
    expect(component.processProductsFinish).toBeFalse();
  });

  it('Should navigate to item detail', inject([Router], (router: Router) => {
    spyOn(router, 'navigate').and.stub();
    component.goToProductDetail('1');
    expect(router.navigate).toHaveBeenCalled();
  }));

});
