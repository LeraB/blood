import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientComponent } from './recipient/recipient.component';
import { RecipientFormComponent } from './recipient-form/recipient-form.component';
import { RecipientListComponent } from './recipient-list/recipient-list.component';
import { RecipientMainComponent } from './recipient-main/recipient-main.component';



@NgModule({
  declarations: [RecipientComponent, RecipientFormComponent, RecipientListComponent, RecipientMainComponent],
  imports: [
    CommonModule
  ]
})
export class RecipientModule { }
