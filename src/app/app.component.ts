import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular7';
  type = 'Easy';
  score =10;


 displayMessage = function(){
return "Welcome to Angular"  
this.score=this.score +10
}
}