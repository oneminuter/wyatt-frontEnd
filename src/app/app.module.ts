import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesPipe } from './service/pipes.pipe';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [AppComponent, PipesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
