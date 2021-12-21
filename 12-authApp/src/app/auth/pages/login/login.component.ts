import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  miForm: FormGroup = this.fb.group({
      email: [ 'test2@test.com', [ Validators.email, Validators.required ] ],
      password: [ '123456', [ Validators.minLength(6), Validators.required ] ],
  });

  constructor( private fb: FormBuilder, 
               private router: Router,
               private authService: AuthService ) { }

  login() {
    console.log(this.miForm.valid);
    const { email, password } = this.miForm.value;

    this.authService.login( email, password )
      .subscribe( ok => {

        console.log(ok);  

        if ( ok === true ) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', ok, 'error')
        }
        
      } )

    
  }

}
