import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  private userNameSource = new BehaviorSubject<String>(" ");
  private ssnSource = new BehaviorSubject<Number>(null);
  private cardNumSource = new BehaviorSubject<Number>(null);
  private payAmountSource = new BehaviorSubject<String>(null);
  private chkNumSource = new BehaviorSubject<String>(null);

  userName = this.userNameSource.asObservable();
  ssn = this.ssnSource.asObservable();
  cardNum = this.cardNumSource.asObservable();
  payAmount = this.payAmountSource.asObservable();
  chkNum = this.chkNumSource.asObservable();





shareUserDetails(userName: String, ssn: Number, cardNum: Number, payAmount: String) {
  this.userNameSource.next(userName);
  this.ssnSource.next(ssn);
  this.cardNumSource.next(cardNum);
  this.payAmountSource.next(payAmount);
}


  shareCheckNumber(chkNum: String) {
    this.chkNumSource.next(chkNum);    
  }

  
}