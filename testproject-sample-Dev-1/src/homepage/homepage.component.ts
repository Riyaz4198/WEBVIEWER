import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { DeviceData } from '../Model/DeviceData'

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Service } from 'src/Shared/Service.service';
import { endWith } from 'rxjs/operators';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private toastr: ToastrService, private ServicesService: Service, private router: Router) { }

  deviceData: any;
  fue: any

  assign(id: string) {

    console.log('id', id)
    sessionStorage.setItem("id", id);
    this.ServicesService.getdevtypeById(id).subscribe(res => {
      this.deviceData = res;


    })
  }

  addTodo(id: string) {

    console.log('id', id)
    sessionStorage.setItem("id", id);
    this.ServicesService.getdevtypeById(id).subscribe(res => {
      this.deviceData = res;

      console.log(res);


    })
    if (this.deviceData?.DEVICE_TYPE === 'Switch') {

      this.router.navigate(['/switch']);


    }
    else if (this.deviceData?.DEVICE_TYPE === 'Recloser') {
      if (this.deviceData?.CONTROL_TYPE === 'TripSaver II') {
        this.router.navigate(['/tripsaver']);
      }
      else if (this.deviceData?.CONTROL_TYPE === 'Fusesaver') {
        this.router.navigate(['/fusesaver']);
      }
      else if (this.deviceData?.CONTROL_TYPE === 'M-7679') {
        this.router.navigate(['/recloser-beck']);
      }
      else if ((this.deviceData?.CONTROL_TYPE === '3A') || (this.deviceData?.CONTROL_TYPE === '4C') || (this.deviceData?.CONTROL_TYPE === 'Form 6')) {
        this.router.navigate(['/recloser-cooper']);
      }
    }

    else if (this.deviceData?.DEVICE_TYPE === 'Capacitor') {
      this.router.navigate(['/capacitor']);
    }

    else if (this.deviceData?.DEVICE_TYPE === 'Sectionalizer') {
      this.router.navigate(['/sectionalizer']);
    }
    else if (this.deviceData?.DEVICE_TYPE === 'Regulator') {
      this.router.navigate(['/regulator']);
    }
    else if (this.deviceData?.DEVICE_TYPE === 'Interrupter') {

      if (this.deviceData?.CONTROL_TYPE === 'Type 80' || this.deviceData?.CONTROL_TYPE === 'Type 20' || this.deviceData?.CONTROL_TYPE === 'Type 380') {
        this.router.navigate(['/intelasti']);
      }
      else {
        this.router.navigate(['/intsel']);
      }
    }
    else if (this.deviceData?.DEVICE_TYPE === 'Circuit Breaker') {

      this.router.navigate(['/circuitbreaker']);
    }




  }

  ngOnInit() {

  }

}


