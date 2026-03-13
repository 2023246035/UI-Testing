import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

import { provideHttpClient } from "@angular/common/http";

import { provideTranslateService, TranslateLoader } from "@ngx-translate/core";
import {
  TranslateHttpLoader,
  TRANSLATE_HTTP_LOADER_CONFIG,
} from "@ngx-translate/http-loader";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateHttpLoader,
      },
    }),
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: "./assets/i18n/",
        suffix: ".json",
      },
    },
  ],
}).catch((err) => console.error(err));
