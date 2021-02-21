import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as dayjs from 'dayjs';
import * as isoWeek from 'dayjs/plugin/isoWeek';
import * as updateLocale from 'dayjs/plugin/updateLocale';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

dayjs.extend(updateLocale);
dayjs.extend(isoWeek);

dayjs.updateLocale('en', {
  weekStart: 1, // set monday as first day of the week
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
