import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectableItems } from '../../shared/components/select/select.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joined-ride',
  templateUrl: './joined-ride.component.html',
  styleUrls: ['./joined-ride.component.css']
})
export class JoinedRideComponent implements OnInit {
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
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      from: 0,
      to: 0,
      date: new Date('2019 08 30'),
    });
  }

  closeWindow(): void {
    this.router.navigate(['/posted/ride']);
  }
}
