import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HomeService} from '../home/home.service';
import { ConfirmationService } from './confirmation.service';

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
  ssn: Number;

  constructor(private router: Router,
    private _homeService: HomeService,
    private _confirmationService: ConfirmationService) { }

  ngOnInit() {

    this._homeService.userName.subscribe(res=>this.lastName=res);
    this._homeService.cardNum.subscribe(res => this.cardNumber = res);
    this._homeService.payAmount.subscribe(res => this.payAmount = res);
    this._homeService.chkNum.subscribe(res =>{ this.chkNum = res});
    this._homeService.ssn.subscribe(res=>this.ssn=res);

  }


  navigateHome(){
    let shouldnavigate = confirm("Are you sure, you want to cancel?");
    if (shouldnavigate)
    this.router.navigate(['/home']);
  }


  validate(){
    let userCheckInfo={
      lastName:this.lastName,
      last4SSN:this.ssn,
      cardNumber:this.cardNumber,
      amount:this.payAmount,
      checkNumber: this.chkNum
    }
    this._confirmationService.saveCheckInfo(userCheckInfo).subscribe((res:any)=>{
      console.log(res);
      this._homeService.shareRefNum(res.id.toString());
      this.router.navigate(['/status']);
    },err=>{
      console.log("Error Encountered",err);
        this.router.navigate(['/error']);
    })
    
  }

}
