import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../Shared/Service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import{} from '../Model/DeviceData';
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  switch:any;
 

  constructor(private service : Service,private router: Router) { }

  ngOnInit(): void {



    const routeid : string = sessionStorage.getItem("id");
    console.log(routeid);
    this.service.getSwitchById(routeid).subscribe(res=> {
      this.switch = res;
      console.log(res);
      
    })
      
   
  }

}

