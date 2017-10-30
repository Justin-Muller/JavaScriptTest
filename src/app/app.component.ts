import { Component } from '@angular/core';
import { sonnets } from './sonnets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Shakespeare's Sonnets";

  formattedSonnets = sonnets.map((sonnet) => {
    return {
      ...sonnet,
      linesFormatted: sonnet.lines.join('\n')
    }
  });
}
