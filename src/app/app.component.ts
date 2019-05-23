import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Tag name for the component.
  templateUrl: './app.component.html', // Location of the HTML.
  //template: '<h1>{{title}}', // Can put this as well.
  styleUrls: ['./app.component.css'] // Styling for that component.
})
export class AppComponent {
  title = 'todo'; // Interpolation {{title}}, takes the value here and put it in HTML.
  message = 'Welcome';
}
