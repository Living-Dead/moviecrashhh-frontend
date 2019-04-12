import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ArticleViewComponent } from '../article-view/article-view.component';

import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss']
})
export class ModalTemplateComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private dataService: DataService,
  ) { }


  public close() {
    this.modalService.dismissAll();
    this.router.navigate([this.dataService.getData]);
  }

  ngOnInit() {
    console.log('modal', this.dataService.getData);
    console.log(this.router.url);
    // router.url
    // TODO api call
  }

}