import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  money=88
  name='chance - e -illaya'
  birthday= new Date()
  constructor() { }

  ngOnInit() {
  }

}
