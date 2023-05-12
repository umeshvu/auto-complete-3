import {
  Component,
  AfterViewInit,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements AfterViewInit {
  options: any = [1];

  @ViewChild('autoInput', { read: MatAutocompleteTrigger, static: false })
  autocompleteTrigger!: MatAutocompleteTrigger;

  @ViewChild(MatAutocomplete)
  autocomplete!: MatAutocomplete;

  constructor(private cdref: ChangeDetectorRef) {}

  onOptionSelected(event: any) {
    console.log(event);
  }

  ngAfterViewInit() {
    if (this.options.length === 1) {
      this.autocompleteTrigger.writeValue(this.options[0]);
      this.cdref.detectChanges();
      const event = new MatAutocompleteSelectedEvent(
        this.autocomplete,
        this.options[0]
      );
      this.autocomplete.optionSelected.emit(event);
    }
  }
}
