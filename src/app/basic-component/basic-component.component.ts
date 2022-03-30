import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-component',
  templateUrl: './basic-component.component.html',
  styleUrls: ['./basic-component.component.css']
})
export class BasicComponentComponent implements OnInit {

  public isOn: boolean;

  constructor() { 

    this.isOn = false;
  }

  ngOnInit(): void {
  }

  get message() {
    return `La luz esta ${this.isOn ? 'prendida' : 'apagada'}`;
  }

  /**
   * clicked
   */
  public clicked() {
    this.isOn = !this.isOn
  }

}
