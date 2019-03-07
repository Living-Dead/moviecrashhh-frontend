import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from '../modal-basic';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  public url: string = "";
  closeResult: string;
  articleModalData: Object;
  obj: any;
  condition: boolean;
  data$: Object;

  constructor(
    private router : Router,
    private modalService: NgbModal,
    private apiService: ApiService,
  ) {}

  open(content, articleData) {
    console.log(content);
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
    };
    let favourite: any;
    this.articleModalData = articleData.data;
    this.modalService.open(content, ngbModalOptions).result.then((result) => {
      console.log('result', result);
      this.favourite(favourite);
    }, (reason) => {
      // TODO
    });
  }

  private favourite(data: any): any {
    console.log('click', data);
    // TODO
    // call apiService
  }

  ngOnInit() {
    console.log(this.router.url);
    this.apiService.getData('ok').subscribe((data) => { 
      this.data$ = data;
        console.log('data', data);
      }
     );
    console.log(this.data$);
  }
}
