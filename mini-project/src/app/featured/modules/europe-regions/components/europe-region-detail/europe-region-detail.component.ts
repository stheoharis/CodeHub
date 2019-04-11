import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainHttpService } from 'src/app/core/services/main-http.service';
import { ICapitalDetail } from 'src/app/shared/models/ICapitalDetail';

@Component({
    selector: 'app-europe-region-detail',
    templateUrl: './europe-region-detail.component.html',
    styleUrls: ['./europe-region-detail.component.scss']
})
export class EuropeRegionDetailComponent implements OnInit {

    public CapitalDetails: Array<ICapitalDetail>;
    public RouteParams: string;

    constructor(private route: ActivatedRoute, private mainHttpService: MainHttpService) { }

    ngOnInit() {

        this.route.params
            .subscribe(p => {

                this.RouteParams = p.args;

                this.mainHttpService.Get<ICapitalDetail>("https://restcountries.eu/rest/v2/capital/" + this.RouteParams)
                    .subscribe(data => {
                        this.CapitalDetails = data;
                        console.log(data);
                    });

            }
            );



    }

}
