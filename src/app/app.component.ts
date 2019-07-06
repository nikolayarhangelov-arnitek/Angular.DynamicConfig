import { Component } from '@angular/core';

import { config } from './../environments/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  environment = config.environment;
}
