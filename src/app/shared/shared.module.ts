import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { appRouting_pages } from '../pages/pages.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  imports: [PipesModule, appRouting_pages, CommonModule]

})

export class SharedModule { }
