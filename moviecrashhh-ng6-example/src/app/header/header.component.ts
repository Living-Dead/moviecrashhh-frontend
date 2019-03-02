import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header: any;
  @Input('header') headerData: any;


  constructor() {


  }

  ngOnInit() {
    this.header = {
    name: this.headerData,
  }
  console.log('header', this.header);
    console.log('headerData',this.headerData.id + 20);
  }
}
