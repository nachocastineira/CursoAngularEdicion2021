import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent  {

  miForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required ] ],
    email: [ '', [ Validators.email, Validators.required ] ],
    password: [ '', [ Validators.minLength(6), Validators.required ] ],
});

  constructor( private fb: FormBuilder, 
               private router: Router,
               private authService: AuthService ) { }

  registrar(){
    console.log(this.miForm.valid);
    console.log(this.miForm.value);

    const { name, email, password } = this.miForm.value;

    this.authService.registrar( name, email, password )
        .subscribe( ok => {

        if ( ok === true ) {
          Swal.fire('¡Registro exitoso!', 'Tu usuario fue creado correctamente', 'success');
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', ok, 'error')
        }
        });
  }



}
