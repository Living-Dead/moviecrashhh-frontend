import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { Account } from './enums/account-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  app = {
    name: 'moviecrashhh-ng6-example',
    header: 'HEADER',
    footer: 'FOOTER',
    testValue: 'movie crashhh text',
    id: 1000,
    data: {}
  }
  account$: any;

  constructor(private apiService: ApiService, private auth: AuthService) {

    this.auth.account().subscribe((data) => {
      this.account$ = data;
      Account.user = data;
      console.log(data);
      if (!this.account$.account.isLoggedIn) {
        localStorage.removeItem('loggedIn');
      }
      this.auth.setLoggedIn(this.account$.account.isLoggedIn);
    }
    );
  }

  ngOnInit() { }
}