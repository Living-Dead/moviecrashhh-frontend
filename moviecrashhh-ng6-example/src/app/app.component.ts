import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	app = {
		name: 'moviecrashhh-ng6-example',
		header: 'HEADER',
		testValue: 'movie crashhh test text',
		id: 1000,
	}
}