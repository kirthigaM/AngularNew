import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  validationCheck=function(){
  
  }
  submitDetail = function(hf){
    console.log(hf)
    console.log("Form Value" + JSON.stringify(hf.value))
     console.log("Form valid status"+ hf.valid)
     console.log("Form valid status"+ hf.invalid)
  }
  constructor() { }

  ngOnInit() {
  }

}
