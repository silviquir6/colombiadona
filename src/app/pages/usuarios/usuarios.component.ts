import { ModalUploadService } from './../../components/modal-upload/modal-upload.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

declare var swal : any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  desde: number = 0;
  usuarios: Usuario[] = [];
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(public usuarioService: UsuarioService, public modalUploadService: ModalUploadService) { }

  ngOnInit() {
    this.cargarUsuarios();
    this.modalUploadService.notificacion.subscribe(resp =>{
      this.cargarUsuarios();
    });
  }

  cargarUsuarios() {
    this.cargando = true;

    this.usuarioService.cargarUsuarios(this.desde)
      .subscribe((resp: any) => {

        this.totalRegistros = resp.total;
        this.usuarios = resp.usuarios;
        this.cargando = false;
      });
  }
  cambiarDesde(valor: number) {
    //a q numero la persona quiere moverse
    let desde = this.desde + valor;
    console.log(desde);

    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();

  }
  buscarUsuario(termino: string) {

    if (termino.length <= 0) {
      this.cargarUsuarios();
      return
    }
    this.cargando = true;
    this.usuarioService.buscarUsuario(termino).subscribe((usuarios: Usuario[]) => {

      this.usuarios = usuarios;

      this.cargando = false;
    });

  }

  borrarUsuario(usuario:Usuario){

    if (usuario._id=== this.usuarioService.usuario._id){
swal ('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
return;

    }

    swal({
      title: 'Está seguro?',
      text: 'Está eliminando el usuario ' + usuario.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((borrar) => {
      if (borrar) {
this.usuarioService.borrarUsuario(usuario._id)
.subscribe( (borrado:any) =>{

  console.log(borrado);
  this.cargarUsuarios();
}

);
      }
    });



  }
  guardarUsuario(usuario: Usuario) {

    this.usuarioService.actualizarUsuario(usuario).subscribe();
  }

  mostrarModal(id: string){
this.modalUploadService.mostrarModal('usuarios', id );

  }


}
