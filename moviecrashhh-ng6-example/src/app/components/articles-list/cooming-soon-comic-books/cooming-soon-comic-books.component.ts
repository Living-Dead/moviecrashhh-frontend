import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ArticlesListComponent } from '../articles-list.component';

@Component({
	selector: 'app-cooming-soon-comic-books',
	templateUrl: './cooming-soon-comic-books.component.html',
	styleUrls: ['./cooming-soon-comic-books.component.scss']
})
export class CoomingSoonComicBooksComponent implements OnInit {

	private cooming_soon_comic_books: any;
	private data$: any;

	constructor(
		private parent: ArticlesListComponent,
		private apiService: ApiService,
	) {

		this.cooming_soon_comic_books = [];
		this.data$ = [];
	}

	ngOnInit() {

		this.apiService.getCoomingSoonComicBooks()
			.subscribe((data) => {

				console.log('comic books', data);

				this.data$ = data;

				if (this.parent.url[2] === 'comic_book' && typeof this.parent.url[3] === 'undefined') {
					this.cooming_soon_comic_books = this.data$.cooming_soon_comic_books.comic_books;
				}
			});
	}
}
