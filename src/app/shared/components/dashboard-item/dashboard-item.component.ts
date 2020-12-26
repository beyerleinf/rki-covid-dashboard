import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
})
export class DashboardItemComponent implements OnInit {
  @Input() cardTitle = '';
  @Input() caption = '';
  @Input() value = 0;
  @Input() difference = 0;
  @Input() titleParams: any = {};

  constructor() {}

  ngOnInit(): void {}
}
