import { Component, OnInit } from '@angular/core';
import { reject } from 'q';
import { interval } from 'rxjs';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor() {

    this.contarTres().then(
      mensaje => console.log('termino!', mensaje)

    ).catch(
      error => console.log('Error en la promesa', error));

  }

 contarTres(): Promise<boolean> {

    return new Promise((resolve, reject) => {


      let contador = 0;
      //cada segundo se dispara
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }

      }, 1000);

    });
  }

}
