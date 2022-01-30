import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './components';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatTooltipModule, TranslateModule.forChild()],
  exports: [LanguageSwitcherComponent],
})
export class LanguageSwitcherModule {}
