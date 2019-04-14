import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit, OnChanges {
  @Input() control: FormControl;
  @Input() label = '';
  @Input() showBax = false;
  @Input() disabled = false;

  constructor() { }

  ngOnInit() {
    this.disabled ? this.control.disable() : this.control.enable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.disabled ? this.control.disable() : this.control.enable();
  }
}
