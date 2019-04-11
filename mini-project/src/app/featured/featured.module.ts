import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurrenciesModule } from './modules/currencies/currencies.module';
import { EuropeRegionsModule } from './modules/europe-regions/europe-regions.module';

@NgModule({
	declarations: [],
	imports: [
        CommonModule,
        RouterModule,
        
	], exports: [
        RouterModule,
        CurrenciesModule,
        EuropeRegionsModule,
	]
})
export class FeaturedModule { }
