import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordService } from '../services/password/password.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styles: []
})
export class ResetpasswordComponent implements OnInit {

  forma: FormGroup;

  constructor(public passwordService: PasswordService) {

    this.forma = new FormGroup({
      'codigo': new FormControl(),
      'password': new FormControl()
    });


  }

  ngOnInit() {
  }

  resetPassword() {
    let password = this.forma.value.password;
    let codigo = this.forma.value.codigo;
    this.passwordService.reestablecerContraseña(password, codigo)
      .subscribe((resp: any) => resp);

  }



}
