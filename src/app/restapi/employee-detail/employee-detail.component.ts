import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from "@angular/router"
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  activeid:any
  activeEmployee:any
  constructor(private activeroute:ActivatedRoute,private restapi:RestapiService) { }

  ngOnInit() {
    console.log(this.activeroute);
    this.activeid = this.activeroute.snapshot.params.id
    this.restapi.getEmployeebyId(this.activeid).subscribe((response)=>{
      console.log(response)
      this.activeEmployee=response
    })
    
  }

}
