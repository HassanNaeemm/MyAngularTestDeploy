import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthserviceService, private router: Router) {

  }
  login()
  {
    this.authService.login(this.email,this.password);
    console.log(this.authService.token);
    this.router.navigate(['/confidential']);
  }
  

}

