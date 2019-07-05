import { Component } from '@angular/core';

import { getConfiguration } from './../environments/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  environment = getConfiguration().environment;
}
