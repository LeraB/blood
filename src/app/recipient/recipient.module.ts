import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientComponent } from './recipient/recipient.component';
import { RecipientFormComponent } from './recipient-form/recipient-form.component';
import { RecipientListComponent } from './recipient-list/recipient-list.component';



@NgModule({
  declarations: [RecipientComponent, RecipientFormComponent, RecipientListComponent],
  exports: [
    RecipientListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipientModule { }
