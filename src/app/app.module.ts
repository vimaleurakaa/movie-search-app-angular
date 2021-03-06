import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { DataServices } from './services/data.services';
import { FormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  NbLayoutModule,
  NbThemeModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbTabsetModule,
  NbActionsModule,
  NbButtonGroupModule,
  NbFormFieldModule,
  NbIconModule,
  NbToastrModule,
} from '@nebular/theme';

@NgModule({
  declarations: [AppComponent, RoutingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'movieTheme' }),
    NbLayoutModule,
    AppRoutingModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbTabsetModule,
    FormsModule,
    NbIconModule,
    NbActionsModule,
    NbButtonGroupModule,
    NbEvaIconsModule,
    NbFormFieldModule,
    NbToastrModule.forRoot(),
  ],
  providers: [DataServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class PageModule {}
