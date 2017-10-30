import { Component } from '@angular/core';
import { sonnets } from './sonnets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model = {
    sonnets: sonnets.map((sonnet) => {
      return {
        ...sonnet,
        lines: sonnet.lines.join('\n')
      }
    }),
    messages: [],
    message: null,
    sonnetIndex: 0,
    replying: false
  };

  simulateMessageResponse = () => {
    setTimeout(() => {
      this.model.replying = true;

      setTimeout(() => {
        this.model.messages.push({
          text: this.model.sonnets[this.model.sonnetIndex].lines
        });
        this.model.sonnetIndex++;
        this.model.replying = false;
      }, 2000);
    }, 1500);
  };

  onSubmit = (data) => {
    this.model.messages.push({
      self: true,
      text: this.model.message
    });

    //after completed with message, reset field.
    this.model.message = null;

    this.simulateMessageResponse();
  };
}
