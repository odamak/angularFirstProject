import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
    `
    .clarity {
      color: white;
    }
  `
]
})
export class DetailComponent implements OnInit {
  displaySecret = false;
  clickDates = [];
  index = 0;
  constructor() { }

  ngOnInit() {
  }

  onDisplayDetail(){
    this.displaySecret = !this.displaySecret;
    this.index +=1;
    this.clickDates.push(this.index);

  }

}
