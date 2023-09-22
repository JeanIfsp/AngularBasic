import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ActivitiesListComponent } from './activities-list/activities-list.component';

@NgModule({
  declarations: [
    ActivitiesListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TooltipModule
  ],
  exports: [ActivitiesListComponent]
})
export class ActivitiesModule { }
