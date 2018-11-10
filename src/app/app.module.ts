import { appRouting } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgetpasswordComponent } from './login/forgetpassword.component';
import { ResetpasswordComponent } from './login/resetpassword.component';

@NgModule({
  imports: [
    BrowserModule,
    appRouting,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
