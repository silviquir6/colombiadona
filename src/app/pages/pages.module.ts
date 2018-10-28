import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
//modulos
import { SharedModule } from './../shared/shared.module';

//pipe module
import { PipesModule } from './../pipes/pipes.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//rutas
import { appRouting_pages } from './pages.routes';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    ProfileComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent

  ],
  exports:[
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports:[
    CommonModule,
    SharedModule, appRouting_pages, PipesModule, FormsModule, ReactiveFormsModule
  ]

})

export class PagesModule { }
