import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-another',
  template: `<div> Testing in line Templates in Another</div> `,
  styles: [`
    div{
      color: red;
    }
  `]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
