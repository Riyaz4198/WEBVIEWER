import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/Shared/Service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-sectionalizer',
  templateUrl: './sectionalizer.component.html',
  styleUrls: ['./sectionalizer.component.css']
})
export class SectionalizerComponent implements OnInit {

  sec: any;
  name: string
  showNextComponent(value: string) {
    this.name = value;
  }

  constructor(private service: Service, private router: Router) { }

  ngOnInit(): void {


    const routeid: string = sessionStorage.getItem("id");
    console.log(routeid);
    this.service.getSectionalizerById(routeid).subscribe(res => {
      this.sec = res;

    })


  }

}

