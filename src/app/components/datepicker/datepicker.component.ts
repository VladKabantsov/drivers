import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  public time: { hour: number, minute: number } = { hour: 13, minute: 30 };
  public date: { year: number, month: number, day: number } = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };
  constructor(
    public dialogRef: MatDialogRef<DatepickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Date,
  ) {
  }

  ngOnInit() {
    if (this.data) {
      this.date = { year: this.data.getFullYear(), month: this.data.getMonth() + 1, day: this.data.getDate() };
    }
  }

  setDate(): void {
    this.dialogRef.close(new Date(this.date.year, this.date.month - 1, this.date.day, this.time.hour, this.time.minute));
  }
}
