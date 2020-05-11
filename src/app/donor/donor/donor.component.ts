import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Donor} from "../../models/donor";

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.scss']
})

export class DonorComponent implements OnInit {

  @Input() donor: Donor[];
  @Input() isInFavoriteList: boolean;

  @Output() addToList = new EventEmitter<Donor>();
  @Output() removeFromList = new EventEmitter<Donor>();

  clicked = false;
  constructor() {
  }

  ngOnInit() {
  }

  public addProductToList(donor: Donor) {
    this.addToList.emit(donor);
  }

  public removeProductFromList(donor: Donor) {
    this.removeFromList.emit(donor);
  }

  public respond() {
    return true;
  }

}
