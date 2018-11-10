import { MedicosComponent } from './medicos/medicos.component';
import { HospitalesComponent } from './hospitales/hospitales.component';

import { RouterModule, Routes, CanActivate } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MedicoComponent } from './medicos/medico.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [

      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'}},
      { path: 'graficas1', component: Graficas1Component, data: {titulo: 'graficas'} },
      { path: 'perfil', component: ProfileComponent , data: {titulo: 'perfil'} },
      { path: 'promesas', component: PromesasComponent , data: {titulo: 'promesas'} },
      { path: 'rxjs', component: RxjsComponent  , data: {titulo: 'rxjs'}},
      { path: 'usuarios', component: UsuariosComponent  , data: {titulo: 'Mantenimiento de usuarios'}},
      { path: 'hospitales', component: HospitalesComponent  , data: {titulo: 'Mantenimiento de hospitales'}},
      { path: 'medicos', component: MedicosComponent  , data: {titulo: 'Mantenimiento de medicos'}},
      { path: 'medico/:id', component: MedicoComponent  , data: {titulo: 'Medico'}},
      { path: 'account-settings', component: AccountSettingsComponent , data: {titulo: 'accountSettings'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

    ]
  }
];

export const appRouting_pages = RouterModule.forChild(routes);
