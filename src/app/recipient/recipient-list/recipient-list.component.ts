import {Component, Input, OnInit} from '@angular/core';

import {Recipient} from '../../models/recipient';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.scss']
})
export class RecipientListComponent implements OnInit {

  @Input() recipient: Recipient[];

  favouritesList: Array<Recipient> = [];
  constructor() {
  }

  ngOnInit() {
  }

  addToFavorites(product) {
    this.favouritesList.push(product);
    const index: number = this.recipient.indexOf(product);
    if (index !== -1) {
      this.recipient.splice(index, 1);
    }
  }

  removeFromFavorites(product) {
    const index: number = this.favouritesList.indexOf(product);
    if (index !== -1) {
      this.favouritesList.splice(index, 1);
    }
    this.recipient.push(product);
  }
}
