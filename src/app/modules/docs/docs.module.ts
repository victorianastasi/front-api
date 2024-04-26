import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { DocsRoutingModule } from './docs-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ResolutionComponent } from './resolution/resolution.component';
import { VersionsComponent } from './versions/versions.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ONavModule } from '@gcba/ngx-obelisco/nav';

@NgModule({
  declarations: [FooterComponent, ResolutionComponent, VersionsComponent],
  imports: [
    CommonModule,
    HighlightModule,
    DocsRoutingModule,
    ClipboardModule,
    ONavModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
        themePath: 'node_modules/highlight.js/styles/a11y-dark.min.css',
      },
    },
  ],
})
export class DocsModule {}
