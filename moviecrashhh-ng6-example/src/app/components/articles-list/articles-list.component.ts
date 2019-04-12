import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Data } from '../../enums/data-enum';


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
  condition: boolean;
  data$: any = [];

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private apiService: ApiService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
  ) {

    if (Data.flag === 0) {
      console.log('----- API CALL ------');
      Data.values = this.apiService.getData().pipe(map((res) => res));
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
    this.router.navigateByUrl('/article-view/header/2019-01-01');
  }

  private favourite(data: any): any {
    console.log('click', data);
    // TODO
    // call apiService
    // websocket maybe
  }

  ngOnInit() {
    console.log('url', this.router.url);
    this.url = this.router.url.split("/");

    Data.values
      .subscribe((data) => {
        Data.flag = 1;
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
