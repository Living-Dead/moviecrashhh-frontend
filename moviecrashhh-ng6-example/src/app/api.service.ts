import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(data) {
  	console.log(this.http.get('http://localhost:8080'));
  	if (data === 'ok') {
  		return this.http.get('http://localhost:8080/');
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
}
