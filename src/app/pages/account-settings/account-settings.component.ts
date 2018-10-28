import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingService: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor(theme: string, link: any) {
    this.aplicarCheck(link);
    this.settingService.aplicarTema(theme);

  }
  aplicarCheck(link: any) {

    let selectores: any = document.getElementsByClassName('selector');

    for (let ref of selectores) {

      ref.classList.remove('working');

    }

    link.classList.add('working');
  }
  colocarCheck() {
    console.log('colocar check metodo');
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this.settingService.ajustes.tema;

    for (let ref of selectores) {

      ref.classList.remove('working');
      if (ref.getAttribute('data-theme') === tema) {
console.log('daataa-theme igual');
        ref.classList.add('working');
        break;
      }
    }


  }

}
