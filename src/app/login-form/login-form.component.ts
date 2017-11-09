import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  private apiUrl ='http://localhost:8080/auth'

  constructor() {

  }

  ngOnInit() {
  }


  loginUser(myForm) {

    var login = myForm.target.elements["login"].value;
    var password = myForm.target.elements["password"].value;

    var userID = "ID";

    console.log(userID);

  }

}
