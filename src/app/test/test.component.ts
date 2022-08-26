import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name = "Spensa"
  siteURL = window.location.href
  myId = "testId"
  isDisabled = false;
  dangerClass = "text-danger"
  hasError = false
  isFun= true
  messageClasses = {
    "text-fun": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isFun
  }
  highlightedColor = "orange";
  titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  handleClick(event: any){
    console.log(event)
  }

  greeting = ""

  constructor() { }

  ngOnInit(): void {
  }

  shout(){
    return this.name.toUpperCase()
  }
}
