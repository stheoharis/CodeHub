import { Component, OnInit } from '@angular/core';
import { MainHttpService } from '../../../../../core/services/main-http.service';
import { ICountry } from '../../../../../shared/models/icountry';


@Component({
    selector: 'app-currencies',
    templateUrl: './currencies.component.html',
    styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

    public Countries: Array<ICountry>;

    constructor(private mainService: MainHttpService) { }

    ngOnInit() {

        this.mainService.Get<ICountry>('https://restcountries.eu/rest/v2/region/europe?fields=name;capital;currencies')
            .subscribe(
                data => {
                    this.Countries = data;
                    this.Countries.forEach(country => console.log(country));
                }
            );
    }

}
