import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data$: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService) { }

  onSubmit(login: NgForm) {
    this.apiService.getUserDetails(login.value.email, login.value.password).subscribe((data) => {
      this.data$ = data;
      console.log('data', data);
      if (this.data$.success) {
        this.authService.setLoggedIn(this.data$.success);
        this.router.navigate(['/profile']);
      }
    }
    );
  }

  ngOnInit() {

  }

}
