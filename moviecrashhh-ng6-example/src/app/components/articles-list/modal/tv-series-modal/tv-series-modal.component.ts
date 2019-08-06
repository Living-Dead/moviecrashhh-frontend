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
	selector: 'app-tv-series-modal',
	templateUrl: './tv-series-modal.component.html',
	styleUrls: ['./tv-series-modal.component.scss']
})
export class TvSeriesModalComponent implements OnInit {
	show = 5;
	@ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
	@ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
	public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
	public loading = true;
	public coloursEnabled = true;
	public loadingTemplate: TemplateRef<any>;
	public config = { animationType: ngxLoadingAnimationTypes.none };
	private actorsCount: any;

	private movieTrailer: any;
	private movie: any;
	private movieTrailerSplit: any;

	private episodeList: any;

	private arrowLeft: any;


	private runtime: string;

	private actors: any;

	private tvShowEpisodes: any;

	private nowMinutely: any;

	private actorImdbUrl: string;

	private network: string;

	private seasonNumbers: any;

	private tvScheduleList: any;




	constructor(
		private modalService: NgbModal,
		private router: Router,
		private dataService: DataService,
		protected sanitizer: DomSanitizer,
		private apiService: ApiService,
	) {
		this.tvScheduleList = [];
		this.seasonNumbers = [];
		this.currentDate = moment().format("YYYY-MM-DD");
		this.nowHourly = moment().format("HH:mm");
		console.log('nowMinutely', this.nowMinutely);
		this.movieTrailer = [];
		this.movieTrailerSplit = [];
		this.movie = '';

		this.loading = true;

		this.actorImdbUrl = 'https://www.imdb.com/name/';


		console.log(this.dataService.getData);

		this.movie = this.dataService.getData;

		this.network = this.movie.episode.network;

		console.log(this.movie.data.runtime, this.actors);

		var hours = Math.floor(this.movie.data.runtime / 60);
		var minutes = this.movie.runtime % 60;
		var hourstext = hours !== 0 ? hours + ' óra ' : '';
		this.runtime = 'Játékidő: ' + hourstext + minutes + ' perc';

		this.runtime = this.runtime !== '' && this.runtime !== 'NaN' ? this.runtime : this.movie.data.runtime;
		//this.runtime = moment(this.movie.runtime).format("H:mm");
		this.imdbUrl = environment.imdbUrl + this.movie.imdb_id;

		this.initTrailer();
		this.initMaxSeason();
		this.initTvSchedule();

	}

	initMaxSeason() {
		for (let i = 1; i <= this.movie.data.max_season_number; i++) {
			this.seasonNumbers.push(i);
		}
	}

	initTvSchedule() {
		for (let tv in this.movie.tvShedule) {
			if (this.movie.tvShedule[tv].title.split(' / ')[0] === this.movie.data.originalname ||
				this.movie.tvShedule[tv].title.split(' / ')[0] === this.movie.data.movie_name) {
				this.tvScheduleList.push(
					{
						title: this.movie.tvShedule[tv].title,
						channel: this.movie.tvShedule[tv].channel,
						day: this.movie.tvShedule[tv].day,
						summary: this.movie.tvShedule[tv].summary,
						start: this.movie.tvShedule[tv].start,
					}
				);
				console.log('this.tvScheduleList', this.tvScheduleList);
			}
		};

	}

	initTrailer() {

		for (let entry in this.movie.data.trailer_ids) {


			//this.q = this.movieTrailerSplit[0].split('/');
			console.log('TRAILER PUSH', this.movie.data.trailer_ids[entry]);

			this.movieTrailer.push(this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.movie.data.trailer_ids[entry]));
			this.first = this.movieTrailer[0];

			/*else {
				this.movieTrailer.push(this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + this.q[3] + '?byline=0&amp;portrait=0'));


			}*/

			//console.log('QQQQ', entry, this.movie.trailer.length - 1);



		};
	}

	increaseShow() {
		this.show += 5;
	}

	selectSeason(season) {
		var list = [];
		this.movie.episode.episodes.forEach(function(value) {
			if (value.season === season) {
				list.push({ name: value.name, episode: value.episode });

			}
		});
		this.episodeList = list;
	}

	public close() {
		this.modalService.dismissAll();
	}

	ngOnInit() {

		document.getElementById("picture-prev").style.display = "none";
		$(".scrolling-wrapper").on("scroll", function(e) {

			if (e.currentTarget.scrollLeft <= 0) {
				document.getElementById("picture-prev").style.display = "none";
			} else {
				document.getElementById("picture-prev").style.display = "block";
			}

			if (e.currentTarget.scrollWidth - (e.currentTarget.offsetWidth + e.currentTarget.scrollLeft) === 0) {
				document.getElementById("picture-next").style.display = "none";
			} else {
				document.getElementById("picture-next").style.display = "block";
			}
		});


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


		this.apiService.showTimes({ imdb_id: this.movie.data.id })
			.subscribe((data) => {
				console.log('tv series actors', data);
				this.actors = data.actors;
			});

			this.apiService.getJustWatchApi()
			.subscribe((data) => {
				console.log('dataaaaaa', data);
			});
	}







}