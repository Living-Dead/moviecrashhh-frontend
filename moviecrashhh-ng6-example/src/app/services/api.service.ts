import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private http: HttpClient, private router: Router) { }

	getData(data) {
		console.log(this.http.get('http://localhost:8080'));
		if (data === 'ok') {
			return this.http.get('http://localhost:8080/list');
			/*return [
				{
				"data": {
					"id": 834,
					"first_name": "GS",
					"last_name": "Shahid",
					"phone": "03215110224",
					"role": null,
					"email": "test@example.com",
					"picture": {
					  "url": null,
					  "thumb": {
						"url": null
					  }
					},
					"address": "Nishtar Colony",
					"city_id": 2,
					"provider": "email",
					"uid": "test@example.com"
					}
			},
			{
				"data": {
				"id": 999,
				"first_name": "GS",
				"last_name": "Shahid",
				"phone": "03215110224",
				"role": null,
				"email": "test@example.com",
				"picture": {
				  "url": null,
				  "thumb": {
					"url": null
				  }
				},
				"address": "Nishtar Colony",
				"city_id": 2,
				"provider": "email",
				"uid": "test@example.com"
			  }
			}
		];*/
		}
	}

	getUserDetails(email, password) {
		//post data missing(here you pass email and  password)
		let data = {
			"email": email,
			"password": password
		}
		console.log(data)
		return this.http.post('http://localhost:8080/login', data, { withCredentials: true });
	}

	register(data: Object) {

		console.log(data)
		return this.http.post('http://localhost:8080/register', data);

	}

	logOut(logout) {
		let data = {
			"logout": logout,
		}
		return this.http.post('http://localhost:8080/logout', data, { withCredentials: true });
	}

}