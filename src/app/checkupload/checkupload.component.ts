import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
declare var Tesseract;
@Component({
  selector: 'app-checkupload',
  templateUrl: './checkupload.component.html',
  styleUrls: ['./checkupload.component.css']
})
export class CheckuploadComponent implements OnInit {
  frontChkImageUrl;
  frontChkImagepath;
  frontChkLarge=false;
  backChkImageUrl;
  backChkImagepath;
  backChkLarge = false;
  defaultIcon = "../../assets/images/camera.png";
  loadingIcon = "../../assets/images/loading.gif";
  checkNumber;
  isErr=false;


  constructor(private router: Router, private _homeService: HomeService) { }

  ngOnInit() {
    this.frontChkImagepath = this.defaultIcon;
    this.backChkImagepath = this.defaultIcon;
  }

  frontOfCheck(event) {
    const file = event.target.files[0];
    this.frontChkImagepath = this.loadingIcon;
    this.frontChkLarge = true;
    Tesseract.recognize(file).then(() => {})
    .then(val => {
      console.log(val);
      const pattern = /\n/;
      const index = val.text.search(pattern);
      this.checkNumber = val.text.slice(0, index)}).finally(() => {

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.frontChkImageUrl = reader.result;
        this.frontChkImagepath = this.defaultIcon;
        this.frontChkLarge = false;
      }
    });
  }

  backOfCheck(event) {
    const file = event.target.files[0];
    this.backChkLarge = true;
    this.backChkImagepath = this.loadingIcon;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.backChkImageUrl = reader.result;
      this.backChkImagepath = this.defaultIcon;
      this.backChkLarge = false;

  }

}


  navigateNext() {
    if (this.checkNumber){    
      this._homeService.shareCheckNumber(this.checkNumber);
      this.isErr = false;
      this.router.navigate(['/confirm']);
    }else{
      this.isErr = true;
    }    
  }

  navigateback() {
    this.router.navigate(['/home']);
  }
}
