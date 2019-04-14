import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectableItems } from '../../shared/components/select/select.component';

@Component({
  selector: 'app-posted-ride',
  templateUrl: './posted-ride.component.html',
  styleUrls: ['./posted-ride.component.css']
})
export class PostedRideComponent implements OnInit {
  public form: FormGroup;
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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      from: 0,
      to: 0,
      date: new Date('2019 08 30'),
    });
  }

}
