import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatRippleModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatChipsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatRippleModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatChipsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class SharedMaterialModule {}
