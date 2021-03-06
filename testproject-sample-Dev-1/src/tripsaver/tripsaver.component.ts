import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/Shared/Service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-tripsaver',
  templateUrl: './tripsaver.component.html',
  styleUrls: ['./tripsaver.component.css']
})
export class TripsaverComponent implements OnInit {

  trip:any;
 

  constructor(private service : Service,private router: Router) { }

  ngOnInit(): void {



    const routeid : string = sessionStorage.getItem("id");
    console.log(routeid);
    this.service.getTripsaverById(routeid).subscribe(res=> {
      this.trip = res;
      console.log(res);
      
    })
      
   
  }

}
