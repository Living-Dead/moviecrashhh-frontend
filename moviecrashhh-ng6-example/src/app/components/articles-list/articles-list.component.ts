import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Data } from '../../enums/data-enum';

import { ACTION_LISTING } from '../../store/action/appAction';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  public url: any;
  closeResult: string;
  articleModalData: Object;
  obj: any;
  data$: any = [];
  listingCallApi: any;
  lists: any;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private apiService: ApiService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
  ) {

    dataService
      .getState()
      .subscribe(state => {
        console.log('state', state);
        this.listingCallApi = state.listing;
      })

    if (!this.listingCallApi) {
      console.log('----- API CALL ------');
      this.lists = this.apiService
        .getData()
        .pipe(map((res) => res));
      this.dataService
        .updateState({
          type: ACTION_LISTING
        });
    }

    this.router.routeReuseStrategy
      .shouldReuseRoute = function() {
        return false;
      }

    this.router.events
      .subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          this.router.navigated = false;
          window.scrollTo(0, 0);
        }
      });
  }

  private open() {
    this.dataService.set(this.router.url);
    this.router
      .navigateByUrl('/article-view/header/2019-01-01');
  }

  

  /*private favourite(data: any): any {
    //console.log('click', data);
  }*/

  ngOnInit() {
    console.log('url', this.router.url);
    this.url = this.router.url.split("/");

    this.lists
      .subscribe((data) => {
        for (let entry in data) {
          if (data[entry].type === this.url[2]) {
            if (typeof this.url[3] !== 'undefined') {
              if (data[entry].genre.indexOf(this.url[3]) !== -1) {
                console.log('hdasjldh', data[entry]);
                this.data$.push(data[entry]);
              }
            } else {
              this.data$.push(data[entry]);
            }
          }
        };
      });
  }
}
