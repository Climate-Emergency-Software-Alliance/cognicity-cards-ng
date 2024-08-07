import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ChecklistRoutingModule } from './checklist-routing.module';
import { ChecklistComponent } from './checklist.component';
import { ChecklistItemComponent } from './checklist-item/checklist-item.component';

@NgModule({
  declarations: [
    ChecklistComponent,
    ChecklistItemComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ChecklistRoutingModule
  ],
  exports: [
    TranslateModule,
  ],
  providers: [
    TranslatePipe
  ]
})
export class ChecklistModule { }
