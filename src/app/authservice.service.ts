import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  token:boolean = false;
  login(username:string,password:string){
    if(username === 'admin' && password === 'admin'){
      this.token = true;
     
    }
    else{
      this.token = false;
      
    } 
}
logout()
{
  this.token = false;
  
}
}