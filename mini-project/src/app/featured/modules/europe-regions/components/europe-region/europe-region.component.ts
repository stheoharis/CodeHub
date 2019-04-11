import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainHttpService } from 'src/app/core/services/main-http.service';
import { ICountry } from 'src/app/shared/models/icountry';

@Component({
    selector: 'app-europe-region',
    templateUrl: './europe-region.component.html',
    styleUrls: ['./europe-region.component.scss']
})
export class EuropeRegionComponent implements OnInit {

    public Countries: Array<ICountry>;

    constructor(private mainService: MainHttpService) {

    }

    ngOnInit() {

        this.mainService.Get<ICountry>('https://restcountries.eu/rest/v2/region/europe?fields=name;capital;currencies')
            .subscribe(
                data =>
                this.Countries = data
            );
    }

}
