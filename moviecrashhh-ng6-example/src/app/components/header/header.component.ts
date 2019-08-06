import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header: any;
  logout$: any;
  @Input('header') headerData: any;


  constructor(
    private auth: AuthService,
    private router: Router,
    private userData: DataService,

  ) { }

  logout(data) {
    this.auth
      .logOut(data)
      .subscribe((data) => {
        this.logout$ = data;
        console.log('logout');
        if (this.logout$.success) {
          this.userData.updateState({
            type: 'LOGOUT',
          });
          localStorage.removeItem('loggedIn');
          this.router.navigate(['']);
        }
      }
      );
  }

  ngOnInit() {
    this.header = {
      name: this.headerData,
    }

    this.userData.getState()
      .subscribe(state => {
        console.log('state', state);
      })
  }
}
