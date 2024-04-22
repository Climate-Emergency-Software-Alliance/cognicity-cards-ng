import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from "../../components/submit-button/submit-button.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SubmitButtonComponent
  ],
  exports: [
    SubmitButtonComponent
  ]
})
export class SharedModule {}
