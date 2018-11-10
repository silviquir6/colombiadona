import { Router, ActivatedRoute } from '@angular/router';
import { MedicoService } from './medico.service';
import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from '../../services/hospital/hospital.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Medico } from 'src/app/models/medico.model';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  forma: FormGroup;
  hospitales: Hospital[] = [];
  medico: Medico  = new Medico();
  hospital: Hospital = new Hospital('');

  constructor(public medicoService:MedicoService,
    public hospitalService: HospitalService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public modalUploadService: ModalUploadService) {

    this.forma = new FormGroup({
      'nombreMedico': new FormControl(),
      'hospital': new FormControl()
    });

    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id !== 'nuevo') {
        this.cargarMedico(id);
      }
    });

     }

  ngOnInit() {
    this.hospitalService.cargarHospitales()
    .subscribe(hospitales => {
      return this.hospitales = hospitales;
    });

    this.modalUploadService.notificacion
    .subscribe((resp) =>{


      this.medico.img = resp.medico.img;
    });


  }

  guardarMedico(){
console.log('id hospital', this.forma.value.hospital);


    this.medico.hospital= this.forma.value.hospital;
    this.medico.nombre= this.forma.value.nombreMedico;


if (!this.forma.valid){
  return;
}

this.medicoService.guardarMedico(this.medico)
.subscribe(medico => {
  this.medico._id = medico._id;
this.router.navigate(['/medico', medico._id]);
});

  }


  cambioHospital( id: string ) {

    this.hospitalService.obtenerHospital(id)
    .subscribe(hospital => {
    // console.log(hospital);

    this.hospital = hospital;


    });
  }

cargarMedico(id : string){

this.medicoService.cargarMedico(id)
.subscribe((medico: any) =>   {
  this.medico = medico;
  this.medico.hospital = medico.hospital._id;

  this.cambioHospital(this.medico.hospital);
  this.forma.setValue({
    nombreMedico: this.medico.nombre,
    hospital: this.medico.hospital
  });


  });
  }

  cambiarFoto(){
this.modalUploadService.mostrarModal('medicos', this.medico._id);

  }



}
