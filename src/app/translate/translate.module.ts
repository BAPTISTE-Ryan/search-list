import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateComponent } from './translate.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    TranslateRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [TranslateComponent],
  bootstrap: [TranslateComponent],
})
export class TranslatedModule {}
