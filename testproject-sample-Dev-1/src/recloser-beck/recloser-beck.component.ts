
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/Shared/Service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-recloser-beck',
  templateUrl: './recloser-beck.component.html',
  styleUrls: ['./recloser-beck.component.css']
})
export class RecloserBeckComponent implements OnInit {

  beck:any;
 

  constructor(private service : Service,private router: Router) { }

  ngOnInit(): void {



    const routeid : string = sessionStorage.getItem("id");
    console.log(routeid);
    this.service.getRecloserBeckByID(routeid).subscribe(res=> {
      this.beck = res;
      console.log(res);
      
    })
      
   
  }

}


