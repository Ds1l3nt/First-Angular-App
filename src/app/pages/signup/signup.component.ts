import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user:any;
  constructor(private authSvc: AuthService,
              private router: Router) {
     this.user = {
     };
   }

  ngOnInit() {

  }

  onSignupFormSubmit(form){
    if(!form.valid){
      alert("Form validation errors!");
    }
   // console.log(form.value);

   console.log(this.user);

   this.authSvc.register(this.user).subscribe( (res:any) =>{
          console.log(res);
          if(res.user){
            this.router.navigate(["/"]);
          }else{
            alert(res.message);
          }
          
   });
    
  }

}
