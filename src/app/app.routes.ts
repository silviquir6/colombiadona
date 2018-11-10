import { ResetpasswordComponent } from './login/resetpassword.component';
import { ForgetpasswordComponent } from './login/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: '**', component: NopagefoundComponent }

];

export const appRouting = RouterModule.forRoot(routes, {useHash : true});
