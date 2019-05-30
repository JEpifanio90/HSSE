import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IFeature } from 'src/app/shared/models/feature.interface';

@Component({
  selector: 'hsse-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  public features: Array<IFeature> = [
    {
      img: 'assets/images/analytics.png',
      title: 'Graphs',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat tempus neque, ac cursus elit pellentesque sit amet.'
    },
    {
      img: 'assets/images/chat.png',
      title: 'Chats',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat tempus neque, ac cursus elit pellentesque sit amet.'
    },
    {
      img: 'assets/images/team.png',
      title: 'Teams',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat tempus neque, ac cursus elit pellentesque sit amet.'
    },
    {
      img: 'assets/images/permissions.png',
      title: 'Permissions',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat tempus neque, ac cursus elit pellentesque sit amet.'
    },
  ];
  public screenshots: Array<object> = [
    { img: 'assets/images/placeholder.png' },
    { img: 'assets/images/placeholder.png' },
    { img: 'assets/images/placeholder.png' },
    { img: 'assets/images/placeholder.png' },
    { img: 'assets/images/placeholder.png' },
    { img: 'assets/images/placeholder.png' }
  ];
  public demoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() { }
}
