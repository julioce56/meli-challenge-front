import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { LazySrcDirective } from './directives/lazy.directive';



@NgModule({
  declarations: [
    AlertComponent,
    LazySrcDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LazySrcDirective
  ]
})
export class SharedModule { }
