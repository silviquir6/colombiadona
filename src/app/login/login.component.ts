import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';


declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdameVar: boolean= false;
  auth2:any;

  forma: FormGroup;
constructor(public usuarioService: UsuarioService, public router: Router  ) { }

ngOnInit() {
  console.log('ngOnInit');
this.googleInit();
  this.email = localStorage.getItem('email') || '';
if (this.email.length > 1)
{
  this.recuerdameVar = true;
}

  this.forma = new FormGroup({
    correo: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
    recuerdame: new FormControl(false)

        } );

         this.forma.setValue({
          correo: this.email,
          password: '',
          recuerdame: this.recuerdameVar
        });

}
googleInit(){
console.log('googleInit');
  gapi.load('auth2', ()=>{
this.auth2= gapi.auth2.init({
  client_id : '84232656315-ts6019vflkr7017j6856imc395lrsclq.apps.googleusercontent.com',
  cookiepolicy: 'single host origin',
  scope: 'profile email'
});

this.attachSignIn(document.getElementById('btnGoogle'));

  });
}

attachSignIn(element){
  console.log('attachSignIn');
this.auth2.attachClickHandler(element, {}, (googleUser) =>{
  console.log('attachClickHandler');

let token = googleUser.getAuthResponse().id_token;
console.log('token',token);

this.usuarioService.loginGoogle(token)
            .subscribe(correcto =>{
              console.log('login google correcto');
             window.location.href = '#/dashboard';
             /* this.router.navigate(['/dashboard']);
 */
          });
} );

}


ingresar(){

  if (this.forma.invalid) {
    return;
  }

  console.log(this.forma.value);


  let usuario = new Usuario(
    null,
    this.forma.value.correo,
    this.forma.value.password

  );

  this.usuarioService.login(usuario, this.forma.value.recuerdame)
  .subscribe(correcto => {

   this.router.navigate(['/dashboard']);


  });
}
}
