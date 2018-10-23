import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  usuario: Usuario;
  token: string;

  constructor( public http: HttpClient, public router:Router) {

this.cargarStorage();
  }

  estaLogueado(){
return (this.token.length > 5 ) ? true : false;

  }
  cargarStorage(){

    if(localStorage.getItem('token')){
      this.token= localStorage.getItem('token');
      this.usuario= JSON.parse( localStorage.getItem('usuario'));
    }
    else{
      this.token='';
      this.usuario= null;
    }

  }
 guardarStorage(id:string, token:string, usuario: Usuario){
  localStorage.setItem('id',  id );
  localStorage.setItem('token',  token );
  localStorage.setItem('usuario', JSON.stringify( usuario) );

  this.usuario= usuario;
  this.token=token;
 }

logout(){
this.usuario= null;
this.token= '';
localStorage.removeItem('token');
localStorage.removeItem('usuario');

this.router.navigate(['/login']);

}
  loginGoogle(token: string) {
    let url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, { token })
    .pipe(map((resp: any) => {

      console.log(resp);
     this.guardarStorage(resp.id, resp.token, resp.usuario);
     return true;
    }));

  }
  login(usuario: Usuario, recuerdame: boolean= false) {


    if (recuerdame)
    {
      localStorage.setItem('email', usuario.email );
    }
    else {
      localStorage.removeItem('email');
    }
    let url = URL_SERVICIOS + '/login';
    return  this.http.post(url, usuario)
    .pipe(map((resp: any ) => {
      //console.log(resp);
      this.guardarStorage(resp.id, resp.token, resp.usuario);
      return true;

    }));

  }


  crearUsuario(usuario: Usuario) {

    let url = URL_SERVICIOS + '/usuario';
    return  this.http.post(url, usuario)
    .pipe(map((resp:any)=>{
      swal("Usuario Creado", usuario.email, "success");
      console.log(resp);
      return resp.usuario;

    }));

  }


}
