import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	profile: any;
	account$: any;

	constructor(private auth: AuthService,
		private router: Router) {
		this.auth.account().subscribe((data) => {
			this.account$ = data;
			console.log('data account', data);
			if (!this.account$.account.isLoggedIn) {
				this.router.navigate(['/login']);
			}
			this.profile = data;
		}
		);
	}

	ngOnInit() {

	}

}
