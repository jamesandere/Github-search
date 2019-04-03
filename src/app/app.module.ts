import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailspageService} from './geet/detailspage.service';

import { AppComponent } from './app.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { DateCountPipe } from './date-count.pipe';

const routes:Routes=[
  {path:"detailspage",component:DetailspageComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    DetailspageComponent,
    LandingComponent,
    DateCountPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DetailspageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
