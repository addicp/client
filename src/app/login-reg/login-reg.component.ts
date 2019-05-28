import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  registerForm: object = {
    first_name: '',
    last_name: '',
    email:'',
    password:'',
  }

  loginForm: object = {
    email:'',
    password:'',
  }

  errors: string[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  submitRegister() {
    let obs = this.userService.createUser(this.registerForm);
    obs.subscribe(
      (data) => {
        localStorage.setItem('name', data.first_name);
        localStorage.setItem('user_id', data.id);
        this.redirectToDashboard();
      },
      (errResponse) => {
        this.errors = errResponse.error;
      }
    )
  }

  submitLogin() {
    let obs = this.userService.loginUser(this.loginForm);
    obs.subscribe(
      (data) => {
        localStorage.setItem('name', data.first_name);
        localStorage.setItem('user_id', data.id);
        this.redirectToDashboard();
      },
      (errResponse) => {
        this.errors = errResponse.error;
      }
    )
  }

  redirectToDashboard() {
    this.router.navigate(['/dashboard'])
  }

}
