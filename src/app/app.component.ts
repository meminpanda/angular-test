import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestsService } from './requests.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';

  constructor( private http: HttpClient,
               private requestService: RequestsService
  ) {}

  ngOnInit() {
    this.getJson();
  }

  login(user, password){
    this.requestService.login(user, password);
  }

  getJson(){
    console.log("test");
    this.requestService.getJson("7b26654cb466564d36fd75b2bc435a2f")
      .subscribe((data: any) => {
        console.log(data, "data fired");
      },
      Error => {
        console.log(Error, "this fired");
      });
  }

}
