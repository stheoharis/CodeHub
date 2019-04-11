import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { CurrenciesDetailComponent } from './components/currencies-detail/currencies-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


const routes: Routes = [
    {
        path: 'Currencies', component: CurrenciesComponent,
        children: [
            { path: 'detail/:currency', component: CurrenciesDetailComponent }
        ]
    },
];

@NgModule({
    declarations: [
        CurrenciesComponent,
        CurrenciesDetailComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        MDBBootstrapModule
    ],
    
    exports: [
        CurrenciesComponent,
        CurrenciesDetailComponent,
        RouterModule
    ]
})
export class CurrenciesModule { }
