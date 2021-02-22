import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/Shared/Service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-interrupter-elastimold',
  templateUrl: './interrupter-elastimold.component.html',
  styleUrls: ['./interrupter-elastimold.component.css']
})
export class InterrupterElastimoldComponent implements OnInit {

   //fusesaver : fuse;
   intelasti:any;
 

   constructor(private service : Service,private router: Router) { }
 
   ngOnInit(): void {
 
 
 
     const routeid : string = sessionStorage.getItem("id");
     console.log(routeid);
     this.service.getiNSelById(routeid).subscribe(res=> {
       this.intelasti = res;
       console.log(res);
       
     })
       
    
   }
 
 }
 