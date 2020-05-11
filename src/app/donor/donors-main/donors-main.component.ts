import {Component, OnInit} from '@angular/core';
import donors from '../../constants/donors';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-donors-main',
  templateUrl: './donors-main.component.html',
  styleUrls: ['./donors-main.component.scss']
})
export class DonorsMainComponent implements OnInit {
  public profileForm: FormGroup;
  public donors = donors;

  public filteredDonors = donors;

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
    this.filteredDonors = this.donors;
    if (this.profileForm.value.searchInput !== '' && this.profileForm.value.searchInput !== 'default') {
      // tslint:disable-next-line:max-line-length
      this.filteredDonors = this.filteredDonors.filter(product => product.Name.toLowerCase().match(this.profileForm.value.searchInput.toLowerCase()));
    }
    if (this.profileForm.value.searchRhesusFactor !== '' && this.profileForm.value.searchRhesusFactor !== 'default') {
      this.filteredDonors = this.filteredDonors.filter(product => product.RhesusFactor.match(this.profileForm.value.searchRhesusFactor));
    }
    if (this.profileForm.value.searchType !== '' && this.profileForm.value.searchType !== 'default') {
      this.filteredDonors = this.filteredDonors.filter(product => product.BloodType.match(this.profileForm.value.searchType));
    }
  }
  sortASC(field) {
    this.donors.sort((a, b) => {return (a[field] > b[field]) ? 1 : -1; });
  }

  sortDESC(field) {
    this.donors.sort((a, b) => {return (a[field] > b[field]) ? -1 : 1; });
  }

}
