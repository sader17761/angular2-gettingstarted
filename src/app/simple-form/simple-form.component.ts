import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'app-simple-form',
  template: `
      <!--{{ message }}-->
      <input
        #myInput
        type="text"
        [(ngModel)]="message"
        [ngClass]="{mousedown:isMousedown}"
        (mousedown)="isMousedown = true"
        (mouseup)="isMousedown = false"
        (mouseleave)="isMousedown = false"
        >
      <button
      class="white bg-black code" (click)="update.emit({text:message})">Click Me!</button>
      <!--<button (click)="onClick(myInput.value)">Click Me!</button>-->
  `,
  styles: [`
    :host{
      display: flex;
      flex-direction: column;
    }
    .mousedown{
      border: 2px solid green;
    }
    button{
      border: none;
      margin-top: 5px;
      width: 281px;
      height: 25px;
    }
    input{
      width: 275px;
    }
    input:focus{
      font-weight: bold;
      outline: none;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMousedown;

  @Input() message;

  @Output() update = new EventEmitter();

  // onClick(value) {
  //   console.log(value);
  // }

  constructor() { }

  ngOnInit() {
  }

}
