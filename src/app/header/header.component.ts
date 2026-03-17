import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthserviceService } from '../authservice.service';
import { CommonModule, NgIf } from "@angular/common";

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(public auth:AuthserviceService,private router:Router) {
  
 }
loggedin:boolean=false;

logout()
{
this.auth.logout();
this.router.navigate(['/login']);
}

}
