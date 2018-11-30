import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, JwtService } from '../core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  title = '';
  isResultsLoading = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private jwtService: JwtService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initForm();
    this.title = this.router.url === '/login' ? 'Login' : 'Signup';
  }

  onSubmit(){
    // if title is Signup
    // we need to send the request for Signup
    if(this.title === 'Signup'){
      this.isResultsLoading = true;
      this.authService.signup(this.authForm.value)
        .subscribe(data =>{
          console.log(data);
          this.router.navigate(['/dashboard', 'invoices']);
        }, err => this.errorHandler(err, 'Opps, something went wrong'),
        () => this.isResultsLoading = false);
    }else{
      this.isResultsLoading = true;
      this.authService.login(this.authForm.value)
      .subscribe(data =>{
        this.jwtService.setToken(data.token);
        this.router.navigate(['/dashboard', 'invoices']);
      }, err => this.errorHandler(err, 'Opps, something went wrong'),
      () => this.isResultsLoading = false);
    }
  }

  private initForm() {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  private errorHandler(error, message) {
    this.isResultsLoading = false;
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000
    });
  }

}
