import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorFormComponent } from './donor-form/donor-form.component';
import { DonorsMainComponent } from './donors-main/donors-main.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { DonorComponent } from './donor/donor.component';



@NgModule({
  declarations: [DonorListComponent, DonorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DonorComponent,
    DonorListComponent
  ]
})
export class DonorModule { }
