import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {
  users:any[]
  constructor(private test:RestapiService) { }

  ngOnInit() {
    this.test.getRemoteUsers().subscribe((response)=>{
console.log(response)
this.users = response
    },function(error){

    })
  }

}
