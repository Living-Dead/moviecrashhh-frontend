import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
	name: 'dateSort'
})
export class SetDatePipe implements PipeTransform {


	transform(array: any, field: string): any[] {
		if (!Array.isArray(array)) {
			return;
		}
		array.sort((a: any, b: any) => {
			if (a[field] < b[field]) {
				return -1;
			} else if (a[field] > b[field]) {
				return 1;
			} else {
				return 0;
			}
		});
		return array;
	}

}


@Pipe({
	name: 'replace'
})
export class SetReplacePipe implements PipeTransform {


	transform(str: string) {
		var string = '';
		var chart = '';
		for (let i = 0; i < str.length; i++) {

			string = string + str.charAt(i)
				.replace(" ", "_")
				.replace("á", "a")
				.replace("é", "e")
				.replace("í", "i")
				.replace("ó", "o")
				.replace("ö", "o")
				.replace("ő", "o")
				.replace("ú", "u")
				.replace("ű", "u")
				.replace("ü", "u")
				.replace("–", "-")
				.replace(/[^_!a-zA-Z ]/g, "")
				.toLowerCase();

		}
		return string;
	}

}

@Pipe({
	name: 'datePicker'
})
export class SetDatePickerPipe implements PipeTransform {


	transform(str: string) {

		var string = '';


		switch (moment(str).format("YYYY-MM-DD")) {
			case moment().format("YYYY-MM-DD"): {
				string = 'Mai műsor';
				break;
			}
			case moment().add(1, 'days').format("YYYY-MM-DD"): {
				string = 'Holnapi műsor'
				break;
			}
			default: {
				string = moment(str).locale("hu").format('dddd');
				break;
			}
		}
		return string
	}

}

@Pipe({
	name: 'dateFormatter'
})
export class SetDateFormatterPickerPipe implements PipeTransform {


	transform(str: string) {

		//ar string = '';

		return moment(str).format("MM DD")
	}

}

@Pipe({
	name: 'releaseYear'
})
export class SetReleaseYearPipe implements PipeTransform {


	transform(str: string) {

		//ar string = '';

		return moment(str).format("YYYY")
	}

}

@Pipe({
	name: 'releaseDate'
})
export class SetReleaseDatePipe implements PipeTransform {


	transform(str: string) {

		//ar string = '';

		return moment(str).format("YYYY-MM-DD")
	}

}


@Pipe({
	name: 'imageValidator'
})
export class SetImageValidatorPipe implements PipeTransform {


	transform(url: string) {
		 if (!!url.match(/((https|http)?:\/\/)/gi)) {
            return 'imdb';
         } else {
           	return 'tmdb';
         }
	}

}

