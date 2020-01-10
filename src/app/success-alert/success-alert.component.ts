import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
  <p> Success is here in line </p>
  `,
  styles: [
    `
    p {
      background-color: palegreen;
      padding: 20px;
      border: 1px solid green;
    }
  `
]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
