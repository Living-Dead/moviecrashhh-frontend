import { Component, OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  public url: string = "";
   closeResult: string;
  articleModalData: Object;
  obj: any;
  modalRef: any;
  private click (content) {

  }

  constructor(private modalService: NgbModal,private router : Router) { 
  
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
    };
    //this.articleModalData = articleData.data;
    // Add ModalTemplateComponent
    this.modalService.open(ModalTemplateComponent,ngbModalOptions).result.then((result) => {
      console.log('result', result);
   
    }, (reason) => {
      // TODO
    });


  }

  ngOnInit() {

    this.obj = {data: 1000};
  
       this.router.events.subscribe(event => {
  if (this.router.url !== '/article-view/filmek/2019-01-01') {


        // close all open modals
        this.modalService.dismissAll();        

          }

    });



  }

}