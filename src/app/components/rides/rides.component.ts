import { Component, OnInit } from '@angular/core';
import { SelectableItems } from '../../shared/components/select/select.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  public date: Date = new Date();
  public saving = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      from: null,
      to: null,
      date: new Date(),
    });
  }

  postRide(): void {
    this.saving = true;
    setTimeout(() => {
      this.saving = false;
      this.router.navigate(['add/ride']);
    }, 1000);
  }

  openPicker(): void {
    const ref = this.dialog.open(DatepickerComponent, { minWidth: '300px', maxWidth: '320px', data: this.form.get('date').value });
    ref.afterClosed().pipe(filter(Boolean)).subscribe((date: Date) => {
      this.form.get('date').setValue(date);
    });
  }
}
