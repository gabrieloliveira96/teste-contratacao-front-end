import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(public http: HttpClient) { }


    public login(user: { email: string, password: string }) {


        return new Promise((resolve, reject) => {

            this.http.post(environment.uri.connection_local + '/api/login/', user)
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
