import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ArticlesListComponent } from '../articles-list.component';

@Component({
	selector: 'app-academy-award-winners',
	templateUrl: './academy-award-winners.component.html',
	styleUrls: ['./academy-award-winners.component.scss']
})
export class AcademyAwardWinnersComponent implements OnInit {

	private academyAwardWinners: any;
	private data$: any;
	private showSlider: boolean = false;

	constructor(
		private parent: ArticlesListComponent,
		private apiService: ApiService,
	) {

		this.academyAwardWinners = [];
		this.data$ = [];
	}



	ngOnInit() {

        this.apiService.getNowPlayingMovies()
            .subscribe((data) => {
                this.data$ = data;
                console.log('movie', data);

                if (this.parent.url[2] === 'movie' && typeof this.parent.url[3] === 'undefined') {
                    this.academyAwardWinners = this.data$.premiers.premiers;
                }

                for (let entry in this.data$.premiers.premiers) {
                    if (this.data$.premiers.premiers[entry].genre.indexOf(this.parent.url[3]) !== -1) {
                        this.academyAwardWinners.push(this.data$.premiers.premiers[entry]);
                    }
                };
            });
    }
}