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
	selector: 'app-premier-movies-modal',
	templateUrl: './premier-movies-modal.component.html',
	styleUrls: ['./premier-movies-modal.component.scss']
})
export class PremierMoviesModalComponent implements OnInit {

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

	private productionList = [];

	private imdbUrl: string;

	private first: any;



	constructor(
		private modalService: NgbModal,
		private router: Router,
		private dataService: DataService,
		protected sanitizer: DomSanitizer,
		private apiService: ApiService,
	) {
		this.seasonNumbers = [];
		this.currentDate = moment().format("YYYY-MM-DD");
		this.nowHourly = moment().format("HH:mm");
		console.log('nowMinutely', this.nowMinutely);
		this.movieTrailer = [];
		this.movieTrailerSplit = [];
		this.movie = '';

		this.loading = true;

		this.actorImdbUrl = 'https://www.imdb.com/name/';


		console.log('-------------', this.dataService.getData);

		this.movie = this.dataService.getData;

		this.imdbUrl = environment.imdbUrl + this.movie.imdb_id;

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

		console.log(this.productionList);
	}
	increaseShow() {
		this.show += 5;
	}

	public close() {
		this.modalService.dismissAll();
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




		this.apiService.showTimes({ imdb_id: this.movie.imdb_id })
			.subscribe((data) => {
				console.log('showtimes', data);

				this.actors = data.actors;

			});


	}







}