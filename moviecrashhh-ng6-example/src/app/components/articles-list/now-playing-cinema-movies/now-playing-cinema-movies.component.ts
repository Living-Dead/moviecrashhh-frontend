import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ApiService } from '../../../services/api.service';
import { DataService } from '../../../services/data.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesListComponent } from '../articles-list.component';
import { DetailsModalComponent } from '../modal/details-modal/details-modal.component';


@Component({
	selector: 'app-now-playing-cinema-movies',
	templateUrl: './now-playing-cinema-movies.component.html',
	styleUrls: ['./now-playing-cinema-movies.component.scss']
})

export class NowPlayingCinemaMovies implements OnInit {
	parentRouteId: number;
	private sub: any;
	private array: any;
    private now_playing: any;
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

        this.now_playing = [];
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
            .open(DetailsModalComponent, ngbModalOptions).result
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
                console.log('movie', data);

                if (this.parent.url[2] === 'movie' && typeof this.parent.url[3] === 'undefined') {
                    this.now_playing = this.data$.now_playing.movies;
                }

                for (let entry in this.data$.now_playing.movies) {
                    if (this.data$.now_playing.movies[entry].genre.indexOf(this.parent.url[3]) !== -1) {
                        this.now_playing.push(this.data$.now_playing.movies[entry]);
                    }
                };
            });
    }
}