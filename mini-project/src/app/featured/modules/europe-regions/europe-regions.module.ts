import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuropeRegionComponent } from './components/europe-region/europe-region.component';
import { EuropeRegionDetailComponent } from './components/europe-region-detail/europe-region-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const routes: Routes = [
    {
        path: 'EuropeRegions', component: EuropeRegionComponent,
        children: [
            { path: 'detail/:args', component: EuropeRegionDetailComponent }
        ]
    },
];

@NgModule({
	declarations: [
		EuropeRegionComponent,
		EuropeRegionDetailComponent
	],
	imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MDBBootstrapModule
        
	], 
	exports: [
		EuropeRegionComponent,
        EuropeRegionDetailComponent,
        RouterModule
	]
})
export class EuropeRegionsModule { }
