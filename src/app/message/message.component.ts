import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  refId:String;
  constructor(private _homeService: HomeService,) { }

  ngOnInit() {
    this._homeService.refNum.subscribe(res=>this.refId=res);
  }

}
