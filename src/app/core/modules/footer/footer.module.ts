import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, TranslateModule.forChild()],
  exports: [FooterComponent],
})
export class FooterModule {}
