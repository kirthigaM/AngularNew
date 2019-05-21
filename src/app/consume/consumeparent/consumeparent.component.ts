import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumeparent',
  templateUrl: './consumeparent.component.html',
  styleUrls: ['./consumeparent.component.css']
})
export class ConsumeparentComponent implements OnInit {

  name="angular7"
  constructor() { }

  
  ngOnInit() {
  }

  receivedNewName= function(e){
    console.log(e)
    this.name= e
  }

}
