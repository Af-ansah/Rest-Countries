import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SearchComponent } from "./shared/search/search.component";
import { CardComponent } from "./shared/card/card.component";
import { DataService } from './data.service';
import { CountryInfo } from './interfaces/countries.interface';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, SearchComponent, CardComponent]
})
export class AppComponent implements OnInit{
  title = 'rest-countries';


  private readonly dataService = inject(DataService)
  countries: CountryInfo[] = [];

  ngOnInit(){

    this.dataService.getCountries().subscribe({
      next: (response) => {
        this.countries = response;
        console.log(response)
      }
    })
  }

  trackByCountryId(index: number, country: CountryInfo): string {
    return country.id.cca3;
  }
}
