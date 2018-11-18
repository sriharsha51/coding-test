import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _authService: AuthService, private _usersService: UsersService, private _formbuilder: FormBuilder, private _router:Router) { }

  ngOnInit() {
    this.loginForm = this._formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this._authService.setAuth();
    this._usersService.setUsername(this.loginForm.controls['username'].value);
    if(this._authService.redirectUrl) { // checking if redirectUrl is present to navigate user to that url after the user logs in.
      this._router.navigateByUrl(this._authService.redirectUrl);
    } else {
      this._router.navigate(['/users']);  
    }
  }

}
