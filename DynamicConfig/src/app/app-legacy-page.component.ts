import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  template: '<a [href]="url">{{url}}</a>'
})
export class AppLegacyPageComponent {

  url: string;

  constructor(route: ActivatedRoute) {
    this.url = route.snapshot.data['url'];
  }

}
