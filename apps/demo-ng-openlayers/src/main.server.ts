import { mergeApplicationConfig } from '@angular/core';
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { provideServerRendering, RenderMode, withRoutes } from '@angular/ssr';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const config = mergeApplicationConfig(appConfig, {
  providers: [provideServerRendering(withRoutes([{ path: '**', renderMode: RenderMode.Prerender }]))],
});

export default (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);
