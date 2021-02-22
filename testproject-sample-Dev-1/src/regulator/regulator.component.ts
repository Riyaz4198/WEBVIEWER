import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Service } from 'src/Shared/Service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-regulator',
  templateUrl: './regulator.component.html',
  styleUrls: ['./regulator.component.css']
})
export class RegulatorComponent implements OnInit {

   //fusesaver : fuse;
   regulator:any;
 

   constructor(private service : Service,private router: Router) { }
 
   ngOnInit(): void {
 
 
 
     const routeid : string = sessionStorage.getItem("id");
     console.log(routeid);
     this.service.getRegulatorById(routeid).subscribe(res=> {
       this.regulator = res;
       console.log(res);
       
     })
       
    
   }
 
 }
 
