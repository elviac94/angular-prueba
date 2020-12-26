import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CowItemComponent } from '../cow-item/cow-item.component';
import { ModalComponent } from '../modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CowItemComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
