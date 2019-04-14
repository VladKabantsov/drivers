import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface SelectableItems {
  id: number;
  name: string;
}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, OnChanges {
  @Input() items: SelectableItems[];
  @Input() control: FormControl;
  @Input() label = '';
  @Input() inputLabel = '';
  @Input() disabled = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.disabled ? this.control.disable() : this.control.enable();
  }
}
