import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// App Module is the main module that is loaded in index.html
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
