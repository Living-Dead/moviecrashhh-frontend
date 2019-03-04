import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
		public url: string = "";
    public msg = "";
    nCnt: number = 0;
constructor(private router : Router) {

}

  clickMe(x: number) {
      this.nCnt = this.nCnt + 1;
      this.msg = "Clicked: " + this.nCnt;

      console.log('click', this.msg, x);
  }

        

        ngOnInit() {
            console.log(this.router.url);


        }

}
