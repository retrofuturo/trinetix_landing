import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss']
})
export class ContentMenuComponent implements OnInit {

  contentLinks = [
    {
      label: 'All',
      labelMobile: 'All',
      link: '/all',
      active: true
    },
    {
      label: 'Mobile apps',
      labelMobile: 'Mobile',
      link: '/mobile-apps',
      active: false
    },
    {
      label: 'Web services',
      labelMobile: 'Web',
      link: '/web-services',
      active: false
    },
    {
      label: 'Augmented reality',
      labelMobile: 'AR',
      link: '/augmented-reality',
      active: false
    },
    {
      label: 'UX/UI design',
      labelMobile: 'UX/UI',
      link: '/ux-ui-design',
      active: false
    },
    {
      label: 'Development',
      labelMobile: 'Dev',
      link: '/development',
      active: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
