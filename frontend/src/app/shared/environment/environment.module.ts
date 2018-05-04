import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentService } from './environment.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EnvironmentService
  ],
  declarations: []
})
export class EnvironmentModule { }
