import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';

import { DropdownComponent } from './dropdown/dropdown.component';
import { TextFieldComponent } from './text-field/text-field.component';

@NgModule({
  declarations: [
    DropdownComponent,
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule
  ],
  exports: [
    DropdownComponent,
    TextFieldComponent
  ]
})
export class SharedModule { }
