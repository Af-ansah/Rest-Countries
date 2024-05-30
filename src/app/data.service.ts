import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryInfo } from './interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private readonly http: HttpClient) { }

  getCountries(): Observable<CountryInfo[]>{
    return this.http.get<CountryInfo[]>("https://restcountries.com/v3.1/all")
  }
}
