import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ArticleViewComponent } from '../article-view/article-view.component';


@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss']
})
export class ModalTemplateComponent implements OnInit {

    constructor(private modalService: NgbModal, private router : Router) { }

	public close() {
  		this.modalService.dismissAll(); 
  		this.router.navigate(['/articles-list/list/2019-01-02']);		
  	}

    ngOnInit() {
	  console.log(this.router.url);
	  // router.url
	  // TODO api call
    }

}