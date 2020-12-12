import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { SERVER_URL } from './app/injection-tokens';

dayjs.extend(customParseFormat);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([{ provide: SERVER_URL, useValue: '' }])
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
