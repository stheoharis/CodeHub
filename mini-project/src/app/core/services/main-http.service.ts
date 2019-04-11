import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MainHttpService {

    constructor(private httpClient: HttpClient) { }

    public Get<T>(url: string): Observable<T[]> {

        return this.httpClient.get<T[]>(url);
    }

}
