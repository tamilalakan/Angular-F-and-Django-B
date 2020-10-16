import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import {  } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  users;
  register;
  input;
  errors;
  rErrors;
  IsLoggedIn = false;
  success;


  constructor(private api: ApiService, private router: Router){
  this.register = {username:'', password:'', email:''};
  this.input = {username:'', password:''};
  }
  onGetUser() {
    this.api.getUser().subscribe(
      data => {
        this.users = data;

      },
      error => {
        alert(error)
      }

      );
  }

  onRegister() {
  this.api.registerUser(this.register).subscribe(
    data => {
      alert ('User ' + this.register.username + ' has been created');
      this.success = "Successfully Created..Kindly Login..";
    },
    error => {
      this.rErrors = "*Kindly see and fill the form..";
    }
    );
  }

  onLogin() {
  this.api.loginUser(this.input).subscribe(
    data => {
      alert ('User ' + this.input.username + ' logged....');
      this.IsLoggedIn = true;
      // this.router.navigate(['/']);
    },
    error => {
      this.errors = "*UserName or Password Incorrect...";
    });
  }
}
