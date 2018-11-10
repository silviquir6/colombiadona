import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {


medicos: Medico[] = [];

  constructor(public medicoService: MedicoService) { }

  ngOnInit() {
    this.cargarMedicos();
  }
  cargarMedicos() {
this.medicoService.cargarMedicos()
.subscribe(medicos => this.medicos = medicos);
  }
  buscarMedico(termino: string){

    if (termino.length <= 0){
      this.cargarMedicos();
  return;
    }

  this.medicoService.buscarMedico(termino)
  .subscribe(medicos => {
    this.medicos = medicos; });

  }

  borrarMedico(medico: Medico) {
    console.log('llego a borrar medico');
this.medicoService.borrarMedico(medico._id)
.subscribe(() => this.cargarMedicos());
console.log('llego a borrar medico');

  }



}
