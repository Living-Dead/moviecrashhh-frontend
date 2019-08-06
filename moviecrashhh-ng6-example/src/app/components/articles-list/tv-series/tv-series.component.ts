import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ApiService } from '../../../services/api.service';
import { DataService } from '../../../services/data.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesListComponent } from '../articles-list.component';
import { TvSeriesModalComponent } from '../modal/tv-series-modal/tv-series-modal.component';

@Component({
	selector: 'app-tv-series',
	templateUrl: './tv-series.component.html',
	styleUrls: ['./tv-series.component.scss']
})
export class TvSeriesComponent implements OnInit {
	parentRouteId: number;
	private sub: any;
	private array: any;
	private tv_series: any;
	private data$: any;
	private modalData: any;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private apiService: ApiService,
		private parent: ArticlesListComponent,
		private modalService: NgbModal,
		private dataService: DataService,
	) {

		this.tv_series = [];
	}

	openModal(data) {
		console.log(data);



		this.apiService.getEpisoDate(data.provider)
			.subscribe((data1) => {

				this.apiService.getTvShedule(data.provider)
					.subscribe((portHuData) => {

						console.log('episodate', data1);

						console.log('PORT', portHuData);

						console.log('modal open');

						this.dataService.set(
							{
								data: data,
								episode: data1.tvShow,
								tvShedule: portHuData,
							}
						);

						//this.modalData = data;

						//this.modalService.open(DetailsModalComponent);
						//modalRef.componentInstance.modalData = this.modalData;

						let ngbModalOptions: NgbModalOptions = {
							backdrop: 'static',
							keyboard: false
						};

						this.modalService
							.open(TvSeriesModalComponent, ngbModalOptions).result
							.then((result) => {
								console.log('result', result);
							}, (reason) => {
								// TODO
							});

						//modalRef.componentInstance.modalData = this.modalData;

					});
			});
	}

	ngOnInit() {

		this.apiService.getNowPlayingMovies()
			.subscribe((data) => {
				this.data$ = data;
				console.log('tv series movie', data);
				this.tv_series = this.data$.tv_series.movies;

				if (this.parent.url[2] === 'movie' && typeof this.parent.url[3] === 'undefined') {
					this.tv_series = this.data$.tv_series.movies;
				}

				for (let entry in this.data$.tv_series.movies) {
					if (this.data$.tv_series.movies[entry].genre.indexOf(this.parent.url[3]) !== -1) {
						this.tv_series.push(this.data$.tv_series.movies[entry]);
					}
				};
			});
	}
}
