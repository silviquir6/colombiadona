import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


subscription: Subscription;

  constructor() {


    this.subscription =  this.regresaObservable().pipe(
    retry(2)
    )
    .subscribe(
      numero => console.log('subs', numero),
    error => console.log('Error en el obs', error),
    () => console.log('El observador terminó')

    );


  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log("la pagina se va a cerrar");
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {


   return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      // tslint:disable-next-line:prefer-const
      let intervalo = setInterval(() => {
        contador ++;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if (contador === 3) {

        //   clearInterval(intervalo);
        //   observer.complete();
        // }

       // if (contador === 2) {
         // clearInterval(intervalo);
        //observer.error('auxilio!');
       // }

      }, 1000);
    })
    .pipe(
      map(resp=>{
return resp.valor;
      }),
      filter((valor, index) => {
        if((valor %2 ) === 1){

          //impar
          return true;
        } else {
          //par
          return false;
        }

      })
    );


  }

}
