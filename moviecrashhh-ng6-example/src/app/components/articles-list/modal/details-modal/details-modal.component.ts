import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ArticleViewComponent } from '../../../article-view/article-view.component';
import { DataService } from '../../../../services/data.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environment';
import { ApiService } from '../../../../services/api.service';

import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

import * as moment from 'moment';

import * as $ from 'jquery';



@Component({
	selector: 'app-details-modal',
	templateUrl: './details-modal.component.html',
	styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent {
	public show: any;
	@ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
	@ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
	public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
	public loading = true;
	public coloursEnabled = true;
	public loadingTemplate: TemplateRef<any>;
	public config = { animationType: ngxLoadingAnimationTypes.none };
	private actorsCount: any;

	//@Input() public modalData;
	private movieTrailer: any;
	private movie: any;
	private movieTrailerSplit: any;
	private q: any;
	private first: any;
	private imdbUrl: string;
	private showTimes1: any;
	private showTimes: any;

	private times: any;
	private city: any;
	private unique: any;
	private unique1: any;

	private cityWithCinema: any;

	private select: any;

	private block: boolean;

	private xxxxx: any;
	private xxxxx2: any;

	private date: any;
	private uniqueDate: any;

	private looper: any;

	//private loading1: boolean;

	private runtime: string;

	private selectDate: string;

	private actors: any;

	private directors: any;

	private actorImdbUrl: any;

	private nowMinutely: any;

	private currentDate: string;

	private nowHourly: string;

	private distributor: any;

	private productionList = [];

	private directorImgValidator: boolean;


	constructor(
		private modalService: NgbModal,
		private router: Router,
		private dataService: DataService,
		protected sanitizer: DomSanitizer,
		private apiService: ApiService,
	) {
		this.currentDate = moment().format("YYYY-MM-DD");
		this.nowHourly = moment().format("HH:mm");
		console.log('nowMinutely', this.nowMinutely);
		this.movieTrailer = [];
		this.movieTrailerSplit = [];
		this.movie = '';
		this.imdbUrl = '';
		this.times = [];
		this.city = [];
		this.unique = [];
		this.unique1 = [];
		this.cityWithCinema = [];
		this.block = false;
		this.date = [];
		this.uniqueDate = [];
		this.loading = true;
		//this.loading1 = true;
		this.actorImdbUrl = 'https://www.imdb.com/name/';
		this.show = 5;

		this.directors = {
			director_imdb_id: '',
		};


		console.log(this.dataService.getData);

		this.movie = this.dataService.getData;

		var hours = Math.floor(this.movie.runtime / 60);
		var minutes = this.movie.runtime % 60;
		var hourstext = hours !== 0 ? hours + ' óra ' : '';
		this.runtime = 'Játékidő: ' + hourstext + minutes + ' perc';
		//this.runtime = moment(this.movie.runtime).format("H:mm");
		this.imdbUrl = environment.imdbUrl + this.dataService.getData.imdb_id;

		console.log('TRAILER', this.movie.trailer_ids);
		for (let entry in this.movie.trailer_ids) {


			//this.q = this.movieTrailerSplit[0].split('/');
			console.log('TRAILER PUSH', this.movie.trailer_ids[entry]);

			this.movieTrailer.push(this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.movie.trailer_ids[entry]));
			this.first = this.movieTrailer[0];

			/*else {
				this.movieTrailer.push(this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + this.q[3] + '?byline=0&amp;portrait=0'));


			}*/

			//console.log('QQQQ', entry, this.movie.trailer.length - 1);



		};

		if (typeof this.dataService.getData.production !== 'undefined' && this.dataService.getData.production !== null) {

			// TODO: is visible section

			for (let i = 0; i < this.dataService.getData.production.length; i++) {
				if (typeof JSON.parse(this.dataService.getData.production[i]).logo_path === 'string') {
					this.productionList.push(
						{
							name: JSON.parse(this.dataService.getData.production[i]).name,
							logo_path: JSON.parse(this.dataService.getData.production[i]).logo_path,

						}
					);
				}
			}
		}


		/*
				function x() {
		
					var promise = new Promise(function(resolve, reject) {
						window.setTimeout(function() {
							resolve('ok');
						}, 3000);
					});
					return promise;
				}
		
				x().then((done) => {
					console.log('done', done, this);
					this.loading = false;
				});
		
				console.log('this.movieTrailer', this.movieTrailer);
		
		*/



		/*if (this.movie.trailer !== null) {
	
		 	this.movieTrailerSplit = this.movie.trailer.split('?v=');
		 	this.q = this.movie.trailer.split('/');
		 	console.log(this.q[0]);
		 	console.log(this.q[1]);
		 	console.log(this.q[2]);


		 	this.movieTrailer = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.movieTrailerSplit[1]);
	}*/

	}
	showMore() {
		this.show += 5;

		console.log('this.show',this.show);
		console.log('actros length', this.actors.length);
	}

	showLess() {
		this.show = 5;

		console.log('this.show',this.show);
		console.log('actros length', this.actors.length);
		 var elmnt = document.getElementById("actors").scrollIntoView();
	}

	public close() {
		this.modalService.dismissAll();
		//this.router.navigate([this.dataService.getData]);
	}



	ngOnInit() {


		function x() {

			var promise = new Promise(function(resolve, reject) {
				$("#youtubeVideo").on('load', function() {

					resolve('ok');

				});
			});
			return promise;
		}

		x().then((done) => {
			console.log('----------done-----------', done, this);
			this.loading = false;
		});

		/*	this.apiService.actors({ cinema_premier_id: this.movie.cinema_premier_id })
			.subscribe((data) => {
					this.loading1 = false;
				console.log('----------------', data);
				//	if (this.movie.actors !== '' && this.movie.actors !== null) {
					if (data.actors.length !== 0) {
			this.actors = data.actors;


			}
		//}
			});


*/

		// TODO: A filmek vetitese varos alapjan a lista ABC sorrendben legyen.

		this.apiService.showTimes({ cinema_premier_id: this.movie.cinema_premier_id, imdb_id: this.movie.imdb_id })
			.subscribe((data) => {
				console.log('showtimes', data);

				this.showTimes1 = data.show_times;
				this.actors = data.actors;

				if (typeof data.directors[0] !== 'undefined' && data.directors.length !== 0) {
					this.directors = data.directors[0];
					this.directorImgValidator = true;
				} else {
					this.directorImgValidator = false;
				}

				//for (let key in data.actors) {

					this.actorsCount = data.actors.length;

				//}

				for (let key in this.showTimes1) {
					if (moment().format("YYYY-MM-DD") <= moment(this.showTimes1[key].date).format("YYYY-MM-DD")) {

						this.date.push({ date: this.showTimes1[key].date });

						var unique = [];
						var tempArr222 = [];
						var data222 = [];
						this.date.forEach((value, index) => {
							if (this.uniqueDate.indexOf(value.date) === -1 && value.date !== '') {
								//var xxx = value.city.toLowerCase().replace(" ", "_");
								this.uniqueDate.push(value.date);
								this.uniqueDate.sort();
							} else {
								tempArr222.push(index);
							}
						});


						tempArr222.reverse();
						tempArr222.forEach(ele => {
							data222.splice(ele, 1);
						});
					}
				}

				this.dateTimer(this.uniqueDate[0]);

			});


	}


	dateTimer(str: string) {

		this.city = [];
		this.unique = [];
		this.cityWithCinema = [];
		this.unique1 = [];
		this.block = false;
		this.xxxxx = '';
		this.xxxxx2 = '';
		this.showTimes = [];
		this.times = [];
		this.selectDate = str;



		for (let key in this.showTimes1) {

			if (moment(this.showTimes1[key].date).format("YYYY-MM-DD") === moment(str).format("YYYY-MM-DD")) {
				//console.log(moment(str).format("YYYY-MM-DD"));

				//console.log('date', new Date('2019-05-11'));

				//var flags = [], output = [], i, l = this.showTimes1[key].length;

				this.city.push({ city: this.showTimes1[key].city });

				var unique = [];
				var tempArr = [];
				var data2 = [];
				this.city.forEach((value, index) => {
					if (this.unique.indexOf(value.city) === -1 && value.city !== '') {
						//var xxx = value.city.toLowerCase().replace(" ", "_");
						this.unique.push(value.city);
						this.unique.sort();
					} else {
						tempArr.push(index);
					}
				});
				tempArr.reverse();
				tempArr.forEach(ele => {
					data2.splice(ele, 1);
				});
			}
		}
	}

	selectCity(str: any) {
		this.cityWithCinema = [];
		this.unique1 = [];
		this.block = false;
		this.xxxxx = str;


		//console.log('UNIQUE', this.unique);

		//this.city = unique;


		//this.city.push({ city: this.showTimes1[key].city });



		for (let key in this.showTimes1) {
			if (moment(this.selectDate).format('YYYY-MM-DD') === moment(this.showTimes1[key].date).format('YYYY-MM-DD')) {

				if (this.showTimes1[key].city == str) {

					this.cityWithCinema.push({ cinema_name: this.showTimes1[key].cinema_name });

					var tempArr1 = [];
					var data21 = [];
					this.cityWithCinema.forEach((value, index) => {
						if (this.unique1.indexOf(value.cinema_name) === -1 && value.cinema_name !== '') {

							this.unique1.push(value.cinema_name);
						} else {
							tempArr1.push(index);
						}
					});
					tempArr1.reverse();
					tempArr1.forEach(ele => {
						data21.splice(ele, 1);
					});
				}
			}
		}
		/*

		var tempArr1 = [];
		var data21 = [];
		this.showTimes.forEach((value, index) => {
			if (this.unique1.indexOf(value.city) === -1 && value.city !== '') {
				this.unique1 = value.city;
			} else {
				tempArr1.push(index);
			}
		});
		tempArr1.reverse();
		tempArr1.forEach(ele => {
			this.showTimes.splice(ele, 1);
		});

		for (let key333 in this.times) {
			this.cityWithSHowtimes.push(this.times[key333].showtimes);
			//console.log('timewdqwdqws', this.times[key333].showtimes);
		}

		//console.log('time232323s', this.showTimes);

		console.log('time232323s', this.cityWithSHowtimes);
		*/



		//this.iframe = sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com")


		//this.movieTrailer = this.modalData.split(",");

		//console.log(this.movieTrailer[0]);

		//this.movieTrailerUrl = 'https://www.youtube.com/watch?v=' + this.movieTrailer[0];



		//console.log('modal', this.dataService.getData);
		//console.log(this.router.url);
		// router.url
		// TODO api call
	}

	selectCinema(str2: any) {
		this.xxxxx2 = str2;
		this.showTimes = [];
		this.times = [];

		for (let key in this.showTimes1) {
			if (moment(this.selectDate).format('YYYY-MM-DD') === moment(this.showTimes1[key].date).format('YYYY-MM-DD')) {
				if (this.showTimes1[key].cinema_name == str2) {

					this.block = true;
					for (let key1 in this.showTimes1[key].showtimes) {
						this.times = [];

						this.times.push({ showtimes: this.showTimes1[key].showtimes[key1] });


						var tempArr1 = [];
						var data21 = [];
						this.times.forEach((value, index) => {
							if (this.showTimes.indexOf(value.showtimes) === -1 && value.showtimes !== '') {

								this.showTimes.push(
									{
										time: value.showtimes,
										date: moment(this.showTimes1[key].date).format('YYYY-MM-DD'),
									}
								);
								this.showTimes.sort((a, b) => (a.time > b.time) ? 1 : -1);
							} else {
								tempArr1.push(index);
							}
						});
						tempArr1.reverse();
						tempArr1.forEach(ele => {
							data21.splice(ele, 1);
						});
					}
				}
			}
		}
	}
}