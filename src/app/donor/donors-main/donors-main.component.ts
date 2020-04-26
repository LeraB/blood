import {Component, OnInit} from '@angular/core';
import donors from '../../constants/donors';

@Component({
  selector: 'app-donors-main',
  templateUrl: './donors-main.component.html',
  styleUrls: ['./donors-main.component.scss']
})
export class DonorsMainComponent implements OnInit {

  public donors = donors;

  public filteredDonors = donors;

  public favoriteProducts = [];

  constructor() {
  }

  ngOnInit() {
  }

  search(inputEl) {
    const value = inputEl.value;
    if (value !== '') {
      this.filteredDonors = this.donors.filter(product => product.Name.toLowerCase().match(value.toLowerCase()));
    }
    if (value !== 'default') {
      this.filteredDonors = this.donors.filter(product => product.RhesusFactor.match(value));
    }
    if (value !== 'default') {
      this.filteredDonors = this.donors.filter(product => product.BloodType.match(value));
    }
  }
  sortASC(field) {
    this.donors.sort((a, b) => {return (a[field] > b[field]) ? 1 : -1; });
  }

  sortDESC(field) {
    this.donors.sort((a, b) => {return (a[field] > b[field]) ? -1 : 1; });
  }

}
