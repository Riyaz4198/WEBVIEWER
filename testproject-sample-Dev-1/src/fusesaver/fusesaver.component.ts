import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Service } from '../Shared/Service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-fusesaver',
  templateUrl: './fusesaver.component.html',
  styleUrls: ['./fusesaver.component.css']
})
export class FusesaverComponent implements OnInit {
 
  //fusesaver : fuse;
  fuse:any;
 

  constructor(private service : Service,private router: Router) { }

  ngOnInit(): void {



    const routeid : string = sessionStorage.getItem("id");
    console.log(routeid);
    this.service.getFusaverById(routeid).subscribe(res=> {
      this.fuse = res;
      console.log(res);
      
    })
      
   
  }

}
