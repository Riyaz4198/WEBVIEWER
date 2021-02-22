import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/Shared/Service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-recloser-cooper',
  templateUrl: './recloser-cooper.component.html',
  styleUrls: ['./recloser-cooper.component.css']
})
export class RecloserCooperComponent implements OnInit {
  reclosercooper:any;
 

  constructor(private service : Service,private router: Router) { }

  ngOnInit(): void {



    const routeid : string = sessionStorage.getItem("id");
    console.log(routeid);
    this.service.getRecloserCooperByID(routeid).subscribe(res=> {
      this.reclosercooper = res;
      console.log(res);
      
    })
      
   
  }

}

