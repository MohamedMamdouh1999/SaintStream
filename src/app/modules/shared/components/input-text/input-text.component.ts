import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputTextComponent,
    multi: true
  }]
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() errors!: ValidationErrors | null | undefined;
  @Input() touched!: boolean | undefined;
  @Input() submitted!: boolean;
  @Input() required!: boolean;
  @Input() patternEmail!: boolean;
  @Input() patternPassword!: boolean;
  @Input() patternFirstName!: boolean;
  @Input() patternConfirmPassword!: boolean;
  @Input() label!: string;
  @Input() type!: string;
  value!: string;
  onChange!: (value: string) => void;
  onTouched!: () => void;
  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
}
