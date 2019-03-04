import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer: any;
  @Input('footer') footerData: any;


  constructor() {


  }

  ngOnInit() {
    this.footer = {
    name: this.footerData,
  }
  console.log('footer', this.footer);
    console.log('footerData',this.footerData.id + 20);
  }
}