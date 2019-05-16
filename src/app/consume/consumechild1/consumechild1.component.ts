import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-consumechild1',
  templateUrl: './consumechild1.component.html',
  styleUrls: ['./consumechild1.component.css']
})
export class Consumechild1Component implements OnInit {
allBanks:any
  constructor(private local:LocalService) { }

  ngOnInit() {
    this.accessLocalService()
  }

  accessLocalService = function(){
    console.log(this.local.myPI)
        this.allBanks=this.local.addBank()
  }
}
