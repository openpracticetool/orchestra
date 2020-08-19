import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextFieldComponent),
  multi: true
};

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextFieldComponent implements ControlValueAccessor {

  @Input()
  required = false;
  @Input()
  type = 'text';
  @Input()
  title: string;
  @Input()
  name: string;
  @Input()
  hint: string;
  @Input()
  errors: any[];

  private innerValue: any = '';

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onBlur(): void {
    this.onTouchedCallback();
  }

  changefn(): void {
    this.onChangeCallback(this.value);
  }

  get hasError(): string {
    if (!this.errors) {
      return null;
    }
    const result = this.errors.filter(f => {
      return f(this.value);
    });
    return result.length > 0 ? result[1] : null;
  }

  get isSuccess(): boolean {
    if (this.hasError) {
      return false;
    }
    if (typeof this.value === 'string') {
      return this.value && this.value !== '';
    }
    return this.value !== undefined && this.value !== null;
  }

  writeValue(obj: any): void {
    if (obj !== this.innerValue) {
      this.innerValue = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}
