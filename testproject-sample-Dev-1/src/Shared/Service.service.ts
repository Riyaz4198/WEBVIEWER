
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
//import { map, catchError, mergeMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class Service {
  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;
  getFusaverById(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/api/Fuesaver/GetFusaverById/${id}`);
  }
  getSectionalizerById(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/api/Sectionalizer/GetSectionalizerById/${id}`);
  }
  getTripsaverById(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/api/Tripsaver/GetTripsaverById/${id}`);
  }
  getSwitchById(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/api/Switch/GetSwitchById/${id}`);
  }

  getRecloserCooperByID(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/api/RecloserCooper/GetRecloserById/${id}`);
    //return this.http.get<any>(`http://localhost:57144/api/RecloserCooper/GetRecloserById/${id}`);
  }
  getRecloserBeckByID(id: any): Observable<any> {
    //return this.http.get<any>(this.baseUrl+`/api/RecloserCooper/GetRecloserById/${id}`);
    // return this.http.get<any>(`http://localhost:57144/api/Beckwith/GetBeckwithById/${id}`);
    return this.http.get<any>(this.baseUrl + `/api/Beckwith/GetBeckwithById/${id}`);

  }
  getiSelById(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/api/iSel/GetiSelById/${id}`);
  }
  getCapacitorById(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/api/Capacitor/GetCapacitorById/${id}`);
    //return this.http.get<any>(`http://localhost:57144/api/Capacitor/GetCapacitorById/${id}`);
  }

  getiNSelById(id: any): Observable<any> {

    return this.http.get<any>(this.baseUrl + `/api/iNSel/GetiNSelById/${id}`);
  }
  getCircuitBreakerById(id: any): Observable<any> {

    return this.http.get<any>(this.baseUrl + `/api/CircuitBreaker/GetCircuitBreakerById/${id}`);
  }
  getdevtypeById(id: any): Observable<any> {
    //return this.http.get<any>('http://localhost:57144/api/Devicetype/GetDevtypeById/${id}`);
    return this.http.get<any>(this.baseUrl + `/api/Devicetype/GetDevtypeById/${id}`);
    // return this.http.get<any>(`http://localhost:57144/api/Devicetype/GetDevtypeById/${id}`);
  }
  getRegulatorById(id: any): Observable<any> {
    //return this.http.get<any>(this.baseUrl+`/api/Regulator/GetRegulatorById/${id}`);
    return this.http.get<any>(this.baseUrl + `/api/Regulator/GetRegulatorById/${id}`);
    //return this.http.get<any>(`http://localhost:57144/api/Regulator/GetRegulatorById/${id}`);
  }



}
