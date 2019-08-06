import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ApiService } from '../../../services/api.service';
import { DataService } from '../../../services/data.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesListComponent } from '../articles-list.component';
import { PremierMoviesModalComponent } from '../modal/premier-movies-modal/premier-movies-modal.component';



@Component({
	selector: 'app-premier-movies',
	templateUrl: './premier-movies.component.html',
	styleUrls: ['./premier-movies.component.scss']
})
export class PremierMoviesComponent implements OnInit {

	parentRouteId: number;
	private sub: any;
	private array: any;
	private now_playing: any;
	private data$: any;
	private modalData: any;
	private cinemaPremiers: any;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private apiService: ApiService,
		private parent: ArticlesListComponent,
		private modalService: NgbModal,
		private dataService: DataService,
	) {

		this.cinemaPremiers = [];
		this.data$ = [];
	}

	openModal(data) {

		console.log('modal open');

		this.dataService.set(data);

		//this.modalData = data;

		//this.modalService.open(DetailsModalComponent);
		//modalRef.componentInstance.modalData = this.modalData;

		let ngbModalOptions: NgbModalOptions = {
			backdrop: 'static',
			keyboard: false
		};

		this.modalService
			.open(PremierMoviesModalComponent, ngbModalOptions).result
			.then((result) => {
				console.log('result', result);
			}, (reason) => {
				// TODO
			});

		//modalRef.componentInstance.modalData = this.modalData;


	}


	ngOnInit() {



		this.apiService.getNowPlayingMovies()
			.subscribe((data) => {
				this.data$ = data;
				//console.log('movie', data);

				if (this.parent.url[2] === 'movie' && typeof this.parent.url[3] === 'undefined') {
					this.cinemaPremiers = this.data$.premiers.movies;
					console.log('this.cinemaPremiers', this.cinemaPremiers);
				}

				for (let entry in this.data$.premiers.movies) {
					if (this.data$.premiers.movies[entry].genre.indexOf(this.parent.url[3]) !== -1) {
						this.cinemaPremiers.push(this.data$.premiers.movies[entry]);
						console.log('for --- this.cinemaPremiers', this.cinemaPremiers);
					}
				};
			});
	}
}