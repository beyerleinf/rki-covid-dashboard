import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './components';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatTooltipModule, TranslateModule.forChild()],
  exports: [LanguageSwitcherComponent],
})
export class LanguageSwitcherModule {}
