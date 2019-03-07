import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
	{
		path: '',
		component: BlogComponent
	},
	{
		path: 'article-view/:id/:id1',
		component: ArticleViewComponent
	},
	{
		path: 'articles-list/:id/:id1',
		component: ArticlesListComponent
	},
	{
		path: '**',
		component: ArticleViewComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
