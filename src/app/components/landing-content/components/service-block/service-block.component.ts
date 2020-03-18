import { Component, Input, OnInit } from '@angular/core';
import { ServiceInfo } from '../../../../models/Service-info';

@Component({
  selector: 'app-service-block',
  templateUrl: './service-block.component.html',
  styleUrls: ['./service-block.component.scss']
})
export class ServiceBlockComponent implements OnInit {
  @Input() serviceInfo: ServiceInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
