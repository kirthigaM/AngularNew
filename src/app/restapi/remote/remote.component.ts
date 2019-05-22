import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/service/restapi.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {
  users:any
  message:any
  employee:any
  constructor(private restapi:RestapiService,private myrouter:Router) { }

   
  getAllUsers= function(){
    this.restapi.getRemoteUsers().subscribe((response)=>{
      console.log(response)
      this.users = response
          },function(error){
      
          })
  }

  getEmployeeDetails = function(id){
  console.log(id)
//navigate to route/remote/3788
  this.myrouter.navigate(["/remote" , id])
  }

  deleteEmployee = function(id){
    this.restapi.deleteEmployeeById(id).subscribe((response)=>{
      console.log(response)
      this.message=response.success.text
      this.getAllUsers()
    }
    )
  }

  addEmployee = function(){
    this.employee={
      "name":"teskirthiga",
    "salary":"600000000000",
    "age":"23"
  }
    this.restapi.createEmployee(this.employee).subscribe((response)=>{
      console.log(response)
           this.getAllUsers()
    })
  }
  ngOnInit() {
    this.getAllUsers()

   
  }

}
