import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailService } from '../services/mail/mail.service';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styles: []
})
export class ForgetpasswordComponent implements OnInit {


  forma: FormGroup;

  constructor(public mailService: MailService) {


  }

  ngOnInit() {

    this.forma = new FormGroup({
      'correo': new FormControl('', Validators.required)
    });
  }
  enviarCorreo(){

    console.log('correo', this.forma.value.correo);


this.mailService.sendMailForgetPassword(this.forma.value.correo)
.subscribe((resp: any) => resp);


  }

}
