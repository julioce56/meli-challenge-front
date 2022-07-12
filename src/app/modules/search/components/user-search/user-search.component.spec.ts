import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { UserSearchComponent } from './user-search.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/core/store/reducers/app.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;
  let titleService: Title;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot(appReducer),
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    titleService = fixture.debugElement.injector.get(Title);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form is creating', () => {
    component.ngOnInit();
    setTimeout(() => {
      expect(component.formSearch.value.search).toEqual('');
    }, 1000);
  });

  it('Should navigate to search /', inject([Router], (router: Router) => {
    component.formSearch.patchValue({ search: 'TEST123' })
    spyOn(router, 'navigate').and.stub();
    component.goToSearch();
    expect(router.navigate).toHaveBeenCalled();
  }));

  it('Should change the title', inject([Router], (router: Router) => {
    router.navigate(['/']);
    component.ngOnInit();
    expect(titleService.getTitle()).toEqual('Buscar productos | Meli');
  }));
});
