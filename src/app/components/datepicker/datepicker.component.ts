import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  time = {hour: 13, minute: 30};
  // meridian = true;
  constructor() { }

  ngOnInit() {
  }

}
