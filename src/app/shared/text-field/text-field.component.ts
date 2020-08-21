import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ErrorMessage } from 'src/app/models/error-message';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements ControlValueAccessor {

  @Input()
  showSuccess = false;
  @Input()
  type = 'text';
  @Input()
  name: string;
  @Input()
  hint: string;

  constructor(
    @Self() public ngControl: NgControl
  ) {
    this.ngControl.valueAccessor = this;
  }

  get isInvalid(): boolean {
    return this.ngControl.control.dirty && this.ngControl.invalid;
  }

  get isSuccess(): boolean {
    return this.showSuccess && !this.isInvalid;
  }

  get errorMessage(): string {
    if (!this.ngControl.control.errors) {
      return null;
    }
    const errorID = Object.keys(this.ngControl.control.errors)[0];
    return ErrorMessage.getMessages().find(message => (message.id === errorID))?.message(this.ngControl.control.errors[errorID]);
  }

  writeValue(obj: any): void { }

  registerOnChange(fn: any): void { }

  registerOnTouched(fn: any): void { }

  setDisabledState(isDisabled: boolean): void { }
}
