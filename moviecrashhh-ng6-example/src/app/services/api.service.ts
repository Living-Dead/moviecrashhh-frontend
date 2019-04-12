import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private http: HttpClient, private router: Router) { }

	getData() {
		return this.http.get('http://localhost:8080/list');
	}

	getUserDetails(email, password) {
		let data = {
			"email": email,
			"password": password
		}
		console.log(data)
		return this.http.post('http://localhost:8080/login', data, { withCredentials: true });
	}

	register(data: Object) {
		return this.http.post('http://localhost:8080/register', data);
	}

}