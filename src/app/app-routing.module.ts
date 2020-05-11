import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorFormComponent } from './donor/donor-form/donor-form.component';
import { DonorsMainComponent } from './donor/donors-main/donors-main.component';
import { RecipientMainComponent } from './recipient/recipient-main/recipient-main.component';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DonorModule} from './donor/donor.module';
import {RecipientModule} from './recipient/recipient.module';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-donor', component: DonorFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'donors-list', component: DonorsMainComponent },
  { path: 'recipients-list', component: RecipientMainComponent },
  { path: 'register', component: RegisterComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, CommonModule, DonorModule, RecipientModule],
  declarations: [
    DonorFormComponent,
    HomeComponent,
    DonorsMainComponent,
    RecipientMainComponent
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
