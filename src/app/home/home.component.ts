import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  payByCheckForm: any;
  isError:Boolean=false;


  constructor(private router: Router,
    private _homeService: HomeService,
    private fb: FormBuilder) {
    this.payByCheckForm = this.fb.group({
      lastName: ['', Validators.required],
      ssn: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[0-9]*$"),]],
      cardNumber: [null, [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern("^[0-9]*$")]],
      amount: [null, Validators.required]
    })
  }

  onSubmit() {
    const formVal = this.payByCheckForm.value;

    if (this.payByCheckForm.valid) {
      this.isError=false;
      this._homeService.shareUserDetails(formVal.lastName, formVal.ssn, formVal.cardNumber, formVal.amount);
      this.router.navigate(['/upload']);
    }else{
      this.isError=true;
    }


  }

}
