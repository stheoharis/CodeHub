import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperModule } from './modules/wrapperModule/wrapper.module';
import { MainHttpService } from './services/main-http.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
	declarations: [],
	imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        MainHttpService
    ],
    exports: [
        WrapperModule        
	]
})
export class CoreModule { }
