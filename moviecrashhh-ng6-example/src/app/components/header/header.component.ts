import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
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


  constructor(private apiService: ApiService,
    private auth: AuthService,
    private router: Router) { }

  logout(data) {
    this.apiService.logOut(data).subscribe((data) => {
      this.logout$ = data;
      console.log('data', data);
      if (this.logout$.success) {
        this.router.navigate(['']);
      }
    }
    );
  }

  ngOnInit() {
    this.header = {
      name: this.headerData,
    }
    console.log('header', this.header);
    console.log('headerData', this.headerData.id + 20);
  }
}
