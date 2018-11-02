import { ModalUploadService } from './modal-upload.service';
import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {
  imagenSubir: File;
  imagenTemp: string;


  constructor(public subirArchivoService: SubirArchivoService, public modalUploadService: ModalUploadService) { }

  ngOnInit() {
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
    //console.log(archivo);

let reader= new FileReader();
let urlImgTemp= reader.readAsDataURL(archivo);

reader.onloadend= () =>{

  this.imagenTemp= reader.result;
};



  }
  subirImagen(){
    this.subirArchivoService.subirArchivo(this.imagenSubir, this.modalUploadService.tipo, this.modalUploadService.id)
    .then(resp =>{
      console.log(resp);
this.modalUploadService.notificacion.emit(resp);
this.cerrarModal();
    }
      )
      .catch(err =>{
console.log("Error en la carga ...");
      });
  }
  cerrarModal(){
this.imagenTemp= null;
this.imagenSubir= null;

this.modalUploadService.ocultarModal();

  }

}
