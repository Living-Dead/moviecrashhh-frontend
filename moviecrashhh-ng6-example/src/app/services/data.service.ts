import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
	providedIn: 'root'
})

export class DataService {
	data: any = '';
	process: any = '';

	constructor(private store: Store<any>) { }

	get getData() {
		return this.data
	}

	set(value: any) {
		this.data = value;
	}

	getState() {
		return this.store.select('appReducer');
	}

	updateState(action) {
		console.log('action', action);
		this.process = action.type
		this.store.dispatch({
			type: this.process,
			account: action.account,
		})
	}
}