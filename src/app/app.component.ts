import { Component } from '@angular/core';
import { sonnets } from './sonnets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model = {
    formattedSonnets: sonnets.map((sonnet) => {
      return {
        ...sonnet,
        linesFormatted: sonnet.lines.join('\n')
      }
    }),
    messages: [],
    message: null,
    replying: false
  };

  simulateMessageResponse = () => {
    setTimeout(() => {
      this.model.replying = true;



    }, 2000);
  };

  onSubmit = (data) => {
    this.model.messages.push({
      text: this.model.message
    });

    //after completed with message, reset field.
    this.model.message = null;

    this.simulateMessageResponse();
  };
}
