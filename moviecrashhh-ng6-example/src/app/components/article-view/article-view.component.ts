import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  private url: string = "";
  obj: any;

  constructor(
    private modalService: NgbModal,
    private router: Router,
  ) {

    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };

    this.modalService
      .open(ModalTemplateComponent, ngbModalOptions).result
      .then((result) => {
        console.log('result', result);
      }, (reason) => {
        // TODO
      });


  }

  ngOnInit() {

    this.obj = { data: 1000 };

    this.router.events
      .subscribe(event => {
        if (this.router.url !== '/article-view/header/2019-01-01') {
          // close all open modals
          this.modalService
            .dismissAll();
        }
      });
  }
}