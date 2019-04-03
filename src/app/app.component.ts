import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ngOnInit(){
    $(document).ready(function(){
     $('#but').click(function(){
       $('#land').hide();
       $('.container-fluid').show();
     })
    });
  }
}
