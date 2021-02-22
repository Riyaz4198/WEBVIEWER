import { Component, OnInit } from '@angular/core';
import { Service } from 'src/Shared/Service.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-i-sel',
  templateUrl: './interrupter-sel.component.html',
  styleUrls: ['./interrupter-sel.component.css']
})
export class InterrupterSelComponent implements OnInit {

  intsel: any;


  constructor(private service: Service, private router: Router) { }

  ngOnInit(): void {



    const routeid: String = sessionStorage.getItem("id");
    console.log(routeid);
    this.service.getiSelById(routeid).subscribe(res => {
      this.intsel = res;
      console.log(res);

    })


  }

}
interface intsel{
  
         OPERATINGNUMBER : String;
         DIVISION : String;
         FEEDER_NAME : String;
         LOCATION : String;
         CCRATING : String;
         DEVICE_TYPE : String;
         CONTROL_TYPE : String;
         NORMAL_OPERATING_MODE : String;
         FLISR : String;
         SCADA : String;
         SUMMER_LOAD_LIMIT : String;
         WINTER_LOAD_LIMIT : String;
         ENGINEERING_COMMENTS : String;
        //phase

         PHA_MTT : String;
         PHA_TCC_CRV : String;
         PHA_INST_PICKUP : String;
         PHA_TD : String;
        //Ground
         GRD_MTT : String;
         GRD_TCC_CRV : String;
         GRD_TD : String;
         GRD_INST_PICKUP : String;
}

