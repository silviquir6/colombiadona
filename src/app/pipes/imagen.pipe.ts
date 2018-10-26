import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {

    console.log('La imagen recibida es', img);
    console.log('El tipo de imagen es ', tipo);

    let url = URL_SERVICIOS + '/img';

    if (!img) {
      return url + '/usuarios/xxx';
    }
    //es una imagen de google
    if (img.indexOf('https') >= 0) {
      return img;
    }
    switch (tipo) {

      case 'usuario': {
        url += '/usuarios/' + img;
        console.log('la url es: ', url);
        return url;
        break;
      }

      case 'medico': {
        url += '/medicos/' + img;
        console.log('la url es: ', url);
        return url;
        break;
      }

      case 'hospital': {
        url += '/hospitales/' + img;
        console.log('la url es: ', url);
        return url;
        break;
      }

      default: {
        console.log('tipo de imagen no existe');
        url += '/usuarios/xxx';
        console.log('la url es: ', url);
        return url;
        break;
      }

    }

  }
}
