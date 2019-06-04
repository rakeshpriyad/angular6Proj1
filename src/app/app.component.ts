import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Http } from '@angular/http';

import { map} from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular6Proj1';
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];

  isavailable = false;   //variable is set to true

  myClickFunction(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
 }

 changemonths(event) {
  console.log("Changed month from the Dropdown");
  console.log(event);
}

todaydate;
componentproperty;

// constructor(private myservice: MyserviceService) {}
/* ngOnInit() {
  this.todaydate = this.myservice.showTodayDate();
      console.log(this.myservice.serviceproperty);
      this.myservice.serviceproperty = "component created"; // value is changed.
      this.componentproperty = this.myservice.serviceproperty;
} */
emailid;
formdata;

constructor(private http: Http) { }
   httpdata;
  //  ngOnInit() {
  //     this.http.get("http://jsonplaceholder.typicode.com/users")
  //     .pipe(map((response) => response.json()))
  //     .subscribe((data) => this.displaydata(data));     
  //  }
  ngOnInit() {
    //this.todaydate = this.myservice.showTodayDate();
    this.formdata = new FormGroup({
       emailid: new FormControl("angular@gmail.com"),
       passwd: new FormControl("abcd1234")
    });
 }
   displaydata(data) {this.httpdata = data;}

   onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);
 }
}
