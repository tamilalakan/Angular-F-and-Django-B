import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	baseurl =  "http://127.0.0.1:8000";
	httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
	constructor(private http: HttpClient) { }


	getUser(): Observable<any> {
		return this.http.get(this.baseurl + '/users/', {headers:this.httpHeaders});
	}

	registerUser(userData): Observable<any> {
		return this.http.post(this.baseurl + '/users/', userData); 
		}

	loginUser(userData): Observable<any> {
		
    	return this.http.post(this.baseurl + '/auth/', userData); 
		}

}

