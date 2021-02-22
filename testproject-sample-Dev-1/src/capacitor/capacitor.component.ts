import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Service } from 'src/Shared/Service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-capacitor',
  templateUrl: './capacitor.component.html',
  styleUrls: ['./capacitor.component.css']
})
export class CapacitorComponent implements OnInit {

   //fusesaver : fuse;
   capacitor:any;
 

   constructor(private service : Service,private router: Router) { }
 
   ngOnInit(): void {
 
 
 
     const routeid : string = sessionStorage.getItem("id");
     console.log(routeid);
     this.service.getCapacitorById(routeid).subscribe(res=> {
       this.capacitor = res;
       console.log(res);
       
     })
       
    }
  }