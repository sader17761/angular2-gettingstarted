import { Component, Inject } from '@angular/core';
//import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-simple-form></app-simple-form>
      {{ mail.message }}
      <hr>
      {{ api }}
      <hr>
      <ul>
        <li *ngFor="let message of mail.messages">{{ message.text }}</li>
        <!--<li *ngFor="let message of mail.messages">{{ message }}</li>-->
      </ul>

      <app-simple-form *ngFor="let message of mail.messages" [message]="message.text" (update)="onUpdate(message.id, $event.text)"></app-simple-form>
    </div>
  `,
  styles:[`
    app-simple-form{
      margin-bottom: 10px;
    }
  `]
})
export class AppComponent {
  title = 'Let\'s Get Started!';

  // constructor(private mail:MailService){
  //
  // }

  onUpdate(id, text){
    this.mail.update(id, text);
  }

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api
  ){}
}
