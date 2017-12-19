import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi Primer Proyecto';
  event : string;

  evento1(msg:string){
    alert(msg);
  }

  evento2(msg:string){
    this.event = "Pasate por encima";
  }
}
