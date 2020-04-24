import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HomeService} from '../home/home.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  lastName:String;
  chkNum:String;
  cardNumber:Number;
  payAmount:String;

  constructor(private router: Router,
    private _homeService: HomeService) { }

  ngOnInit() {

    this._homeService.userName.subscribe(res=>this.lastName=res);
    this._homeService.cardNum.subscribe(res => this.cardNumber = res);
    this._homeService.payAmount.subscribe(res => this.payAmount = res);
    this._homeService.chkNum.subscribe(res =>{ this.chkNum = res});

  }


  navigateHome(){
    let shouldnavigate = confirm("Are you sure, you want to cancel?");
    if (shouldnavigate)
    this.router.navigate(['/home']);
  }


  validate(){
    this.router.navigate(['/status']);
  }

}
