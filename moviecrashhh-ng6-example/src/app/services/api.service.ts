import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

import * as moment from 'moment';


@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private userData: any;
	private config: any;
	private timeIsNow = moment();

	constructor(
		private http: HttpClient,
		private router: Router) {
		this.config = {};
	}

	getTvShedule(data) {
		return this.http.get('https://port.hu/tvapi/search?q=' + data);
	}

	getData() {
		return this.http.get(environment.apiUrl + '/list');
	}

	getUserDetails(userData: any) {
		console.log(userData)
		return this.http.post(environment.apiUrl + '/login', userData, { withCredentials: true });
	}

	register(data: Object) {
		return this.http.post(environment.apiUrl + '/register', data);
	}

	getNowPlayingMovies() {
		return this.http.get(environment.apiUrl + '/now_playing');
	}

	getCoomingSoonComicBooks() {
		return this.http.get(environment.apiUrl + '/coming_soon_comic_books');
	}

	showTimes(cinema_premier_id: any) {
		return this.http.post(environment.apiUrl + '/show_times', cinema_premier_id);
	}

	getAcademyAwardWinners() {
		return this.http.get(environment.apiUrl + '/academy_award_winners');
	}

	getEpisoDate(data) {
		return this.http.get('https://www.episodate.com/api/show-details?q=' + data);
	}

	actors(cinema_premier_id: any) {
		return this.http.post(environment.apiUrl + '/actors', cinema_premier_id);
	}

	getJustWatchNewestTvSeriesApi(justWatchMovieId: any) {
		return this.http.get('https://apis.justwatch.com/content/titles/show_season/' + justWatchMovieId + '/locale/hu_HU?language=hu');
	}

}