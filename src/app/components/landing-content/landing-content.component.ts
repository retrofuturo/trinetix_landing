import { Component, OnInit } from '@angular/core';
import { ServiceInfo } from '../../models/Service-info';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss']
})
export class LandingContentComponent implements OnInit {
  serviceInfoData: ServiceInfo[];

  constructor() { }

  ngOnInit(): void {
    this.serviceInfoData = [
      {
        imgUrl: 'assets/img/mobile-app.png',
        serviceName: 'Mobile Apps',
        serviceDescription:
          'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.'
      },
      {
        imgUrl: 'assets/img/web-services.png',
        serviceName: 'Web Services',
        serviceDescription:
          'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.'
      },
      {
        imgUrl: 'assets/img/augment.png',
        serviceName: 'Augmented Reality',
        serviceDescription:
          'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.'
      },
      {
        imgUrl: 'assets/img/design.png',
        serviceName: 'UX/UI Design',
        serviceDescription:
          'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.'
      },
      {
        imgUrl: 'assets/img/development.png',
        serviceName: 'Development',
        serviceDescription:
          'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.'
      }
    ];
  }

}
