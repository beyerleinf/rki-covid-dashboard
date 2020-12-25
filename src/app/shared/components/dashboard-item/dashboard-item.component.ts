import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
})
export class DashboardItemComponent implements OnInit {
  @Input() title = '';
  @Input() caption = '';
  @Input() value = 0;
  @Input() difference = 0;

  constructor() {}

  ngOnInit(): void {}
}
