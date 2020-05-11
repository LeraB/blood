import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipient} from "../../models/recipient";

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.scss']
})
export class RecipientComponent implements OnInit {


  @Input() recipient: Recipient[];
  @Input() isInFavoriteList: boolean;

  @Output() addToList = new EventEmitter<Recipient>();
  @Output() removeFromList = new EventEmitter<Recipient>();

  clicked = false;
  constructor() {
  }

  ngOnInit() {
  }

  public addProductToList(recipient: Recipient) {
    this.addToList.emit(recipient);
  }

  public removeProductFromList(recipient: Recipient) {
    this.removeFromList.emit(recipient);
  }

  public respond() {
    return true;
  }

}
