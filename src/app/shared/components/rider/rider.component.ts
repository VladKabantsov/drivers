import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
