import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

import { Account } from '../../enums/account-enum';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

	blog: any;
	account$: any;

	constructor(private auth: AuthService) {
		console.log('enum account user', Account.user);

		if (Account.user) {
			this.auth
				.account()
				.subscribe((data) => {
					this.account$ = data;
					this.auth.setLoggedIn(this.account$.account.isLoggedIn);
				}
				);
		}
	}

	ngOnInit() {
		this.blog = 'dfjhjkfhskjfhsd'
	}
}
