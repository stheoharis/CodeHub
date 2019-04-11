import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { MainHttpService } from 'src/app/core/services/main-http.service';
import { ICountry } from 'src/app/shared/models/icountry';

@Component({
    selector: 'app-currencies-detail',
    templateUrl: './currencies-detail.component.html',
    styleUrls: ['./currencies-detail.component.scss']
})
export class CurrenciesDetailComponent implements OnInit {

    public CountriesWithCurrency: Array<ICountry>;
    public CurrencyCode: string;

    constructor(private route: ActivatedRoute, private mainService: MainHttpService) { }

    ngOnInit() {
        this.route.params.subscribe(p => {

            this.CurrencyCode = p.currency; 

            this.mainService.Get<ICountry>('https://restcountries.eu/rest/v2/currency/' + p.currency + '?fields=name')
                .subscribe(data => {
                    this.CountriesWithCurrency = data;
                    //console.log(this.CountriesWithCurrency);
                });




        });
    }

}
