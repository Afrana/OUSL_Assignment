import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'in28minutes'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.username==="in28minutes" && this.password === 'dummy') {
    // if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
    //   //Redirect to Welcome Page
    //   this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
