import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
myForm:any



  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      fn: new FormControl("", 
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("^[A-Za-z]+$")
      ])),
      score: new FormControl("",this.scoreValidator),
      hobby:new FormControl()
    }
      )
  

}
submitForm=  function(reactiveform)
{
console.log(reactiveform)
console.log(reactiveform.value)
}

scoreValidator= function(control){
console.log(control)
if (control.value < 10)
{
  return {'score':true}
}

}
}
