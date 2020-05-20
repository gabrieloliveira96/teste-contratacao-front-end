import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class DogService {
    constructor(private http: HttpClient) { }


    public list() {
        return new Promise((resolve, reject) => {

            this.http.get(environment.uri.connection_local + '/api/listDog')
                .subscribe(
                    (response) => {
                        resolve(response);
                    },
                    (error) => {
                        reject(error);
                    })
        });

    }



}
