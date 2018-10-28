import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { clearInterval } from 'timers';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {/* 
    let obs = new Observable(observer=>{
      let contador=0;
      let intervalo= setInterval(()=>{
contador +=1;

        observer.next(contador);

        if (contador===3){

          clearInterval(intervalo);
        }

      }, 1000);
   });

   obs.subscribe(numero => {
console.log('subs', numero);

   }); */
  }

  ngOnInit() {
  }

}
