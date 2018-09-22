import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
declare var window:any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   user:any = {
     phone:'',
     password:''
   };
  constructor(private authSvc: AuthService) { 

  }

  ngOnInit() {
  }

  onSigninFormSubmit(form){
    console.log(this.user);
    this.authSvc.login(this.user).subscribe((res:any)=>{
      if(res.user && res.token){
       this.authSvc.saveUser(res.user,res.token);
       window.location.href="/account";
       // this.router.navigate(["/account"]);
      }
      // save user data in localStorage
      // save token in localStorage 

    });


  }

}
