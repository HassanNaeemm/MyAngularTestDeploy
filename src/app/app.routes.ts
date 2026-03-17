import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfidentialComponent } from './confidential/confidential.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"confidential",component:ConfidentialComponent,canActivate:[authGuard]},
    {path:"login",component:LoginComponent}
];
