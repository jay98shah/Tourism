import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  
  private _hillUrl='http://localhost:8081/hill'
  constructor(private _http:HttpClient) { }

  showhill()
  {
  return this._http.get<any>(this._hillUrl)
  }
}
