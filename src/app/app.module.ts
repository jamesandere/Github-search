import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailspageService} from './geet/detailspage.service';


import { AppComponent } from './app.component';
import { DetailspageComponent } from './detailspage/detailspage.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailspageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DetailspageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
