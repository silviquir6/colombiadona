import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  forma: FormGroup;
  //archivo imagen a subir:
  imagenSubir: File;
  imagenTemp: string;

  constructor(public usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.usuario;
    console.log('usuario constructor', this.usuario)
  }

  ngOnInit() {

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email])


    });

    this.forma.setValue({
      nombre: this.usuario.nombre,
      correo: this.usuario.email

    });
  }
  actualizarDatos() {


    if (this.forma.invalid) {
      return;
    }
    console.log(this.forma.value);


    this.usuario.nombre = this.forma.value.nombre;

    if (!this.usuario.google) {
      this.usuario.email = this.forma.value.correo;
    }
    this.usuarioService.actualizarUsuario(this.usuario)
      .subscribe(res => {
        console.log(res);

      });

  }
  //cuando se detecta el cambio (change)
  //recibe un archivo, antes recibia un evento
  seleccionImage(archivo: File) {

    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    if (archivo.type.indexOf('image') < 0)
    {
      swal('Solo Imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;
    console.log(archivo);

let reader= new FileReader();
let urlImgTemp= reader.readAsDataURL(archivo);

reader.onloadend= () =>{

  this.imagenTemp= reader.result;
};



  }
  //cuando se detecta el evento del boton click (click)
  cambiarImagen() {
    this.usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);
  }

}
