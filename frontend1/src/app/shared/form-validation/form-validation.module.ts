import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationService } from './form-validation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    FormValidationService
  ],
  declarations: []
})
export class FormValidationModule { }
