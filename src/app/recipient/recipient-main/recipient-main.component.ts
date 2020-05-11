import { Component, OnInit } from '@angular/core';
import recipient from '../../constants/recipient';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipient-main',
  templateUrl: './recipient-main.component.html',
  styleUrls: ['./recipient-main.component.scss']
})

export class RecipientMainComponent implements OnInit {

  public profileForm: FormGroup;
  public recipient = recipient;

  public filteredRecipient = recipient;

  public favoriteProducts = [];


  constructor() {
    this.profileForm = new FormGroup({
      searchInput: new FormControl('', Validators.required),
      searchRhesusFactor: new FormControl('', Validators.required),
      searchType: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  search() {
    console.warn(this.profileForm.value);
    this.filteredRecipient = this.recipient;
    if (this.profileForm.value.searchInput !== '' && this.profileForm.value.searchInput !== 'default') {
      // tslint:disable-next-line:max-line-length
      this.filteredRecipient = this.filteredRecipient.filter(product => product.Name.toLowerCase().match(this.profileForm.value.searchInput.toLowerCase()));
    }
    if (this.profileForm.value.searchRhesusFactor !== '' && this.profileForm.value.searchRhesusFactor !== 'default') {
      // tslint:disable-next-line:max-line-length
      this.filteredRecipient = this.filteredRecipient.filter(product => product.RhesusFactor.match(this.profileForm.value.searchRhesusFactor));
    }
    if (this.profileForm.value.searchType !== '' && this.profileForm.value.searchType !== 'default') {
      this.filteredRecipient = this.filteredRecipient.filter(product => product.BloodType.match(this.profileForm.value.searchType));
    }
  }
  sortASC(field) {
    this.recipient.sort((a, b) => {return (a[field] > b[field]) ? 1 : -1; });
  }

  sortDESC(field) {
    this.recipient.sort((a, b) => {return (a[field] > b[field]) ? -1 : 1; });
  }

}
