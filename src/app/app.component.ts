import { Component } from '@angular/core';
import { sonnets } from './sonnets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formattedSonnets = sonnets.map((sonnet) => {
    return {
      ...sonnet,
      linesFormatted: sonnet.lines.join('\n')
    }
  });

  messages = [];

  model = {
    message: null
  };

  onSubmit = (data) => {
    this.messages.push({
      text: this.model.message
    });

    //after completed with message, reset field.
    this.model.message = null;
  };
}
