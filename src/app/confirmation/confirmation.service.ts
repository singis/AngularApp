import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private http: HttpClient) { }

  saveCheckInfo(checkInfo){
    console.log(checkInfo);
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {});

}


}