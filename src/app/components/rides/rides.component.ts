import { Component, OnInit } from '@angular/core';
import { SelectableItems } from '../../shared/components/select/select.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {
  public from: SelectableItems[] = [
    { id: 0, name: 'Midtown' },
    { id: 1, name: 'Downtown' },
    { id: 2, name: 'Uptown' },
    { id: 3, name: 'Brooklyn' },
  ];
  public to: SelectableItems[] = [
    { id: 0, name: 'Montauk' },
    { id: 1, name: 'East Hampton' },
    { id: 2, name: 'Southampton' },
  ];
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      from: null,
      to: null,
      date: null,
    });
  }

  postRide(): void {
  }
}
