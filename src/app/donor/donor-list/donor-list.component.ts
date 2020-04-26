import {Component, OnInit, Input, Output} from '@angular/core';

import {Donor} from '../../models/donor';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.scss']
})
export class DonorListComponent implements OnInit {

  @Input() donors: Donor[];

  favouritesList: Array<Donor> = [];
  constructor() {
  }

  ngOnInit() {
  }

  addToFavorites(product) {
    this.favouritesList.push(product);
    const index: number = this.donors.indexOf(product);
    if (index !== -1) {
      this.donors.splice(index, 1);
    }
  }

  removeFromFavorites(product) {
    const index: number = this.favouritesList.indexOf(product);
    if (index !== -1) {
      this.favouritesList.splice(index, 1);
    }
    this.donors.push(product);
  }

}
