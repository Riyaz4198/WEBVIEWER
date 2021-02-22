import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Service } from 'src/Shared/Service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-circuit-breaker',
  templateUrl: './circuit-breaker.component.html',
  styleUrls: ['./circuit-breaker.component.css']
})
export class CircuitBreakerComponent implements OnInit {
  cir:any;
 

  constructor(private service : Service,private router: Router) { }

  ngOnInit(): void {



    const routeid : string = sessionStorage.getItem("id");
    console.log(routeid);
    this.service.getCircuitBreakerById(routeid).subscribe(res=> {
      this.cir = res;
      console.log(res);
      
    })
      
   }
 }


