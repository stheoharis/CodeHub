//ANGULAR CORE
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

//BOOTSTRAP STUFF
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//COMPONENTS
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { FeaturedModule } from '../../../featured/featured.module';

@NgModule({
    declarations: [
        WrapperComponent,
        HeaderComponent,
        FooterComponent,
        ContentWrapperComponent
    ],
    imports: [
        NgbModule,
        FeaturedModule,
        MDBBootstrapModule.forRoot(),
        CommonModule,
        RouterModule
    ],
    exports: [
        WrapperComponent
    ]
})
export class WrapperModule { }
