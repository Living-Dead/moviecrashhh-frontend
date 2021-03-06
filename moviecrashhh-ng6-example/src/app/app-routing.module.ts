import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './components/blog/blog.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NowPlayingCinemaMovies } from './components/articles-list/now-playing-cinema-movies/now-playing-cinema-movies.component';
import { CoomingSoonComicBooksComponent } from './components/articles-list/cooming-soon-comic-books/cooming-soon-comic-books.component';

import { AuthGuard } from './guards/auth.guard';


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
		path: 'articles-list/:id',
		component: ArticlesListComponent,
		children:
			[
				{
					path: ':id', component: NowPlayingCinemaMovies,
				},
				{
					path: ':id', component: CoomingSoonComicBooksComponent,
				},
			]
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'profile',
		component: ProfileComponent,
		canActivate: [AuthGuard]
	},
	{
		path: '**',
		component: BlogComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
