import { Component, OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ArticleViewComponent } from '../article-view/article-view.component';

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
  modalRef: any;
  private click (content) {

  }

  constructor(private modalService: NgbModal,private router : Router) { 
  
  	let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
    };
    //this.articleModalData = articleData.data;
    this.modalService.open(ArticleViewComponent, ngbModalOptions).result.then((result) => {
      console.log('result', result);
   
    }, (reason) => {
      // TODO
    });


  }

  ngOnInit() {
  
  	   this.router.events.subscribe(event => {
	if (this.router.url !== '/articles-list/list/2019-01-02') {


        // close all open modals
        this.modalService.dismissAll();        

        	}

    });



  }

}
