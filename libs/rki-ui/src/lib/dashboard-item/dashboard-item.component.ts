import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rkicovid-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
})
export class DashboardItemComponent implements OnInit {
  @Input() cardTitle = '';
  @Input() value = 0;
  @Input() difference = 0;
  @Input() titleParams: any = {};
  @Input() isLoading = false;

  currentLang = '';

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => (this.currentLang = this.translate.currentLang));
  }
}
