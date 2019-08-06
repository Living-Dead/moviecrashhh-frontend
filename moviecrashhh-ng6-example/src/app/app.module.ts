import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';

import { AuthGuard } from './guards/auth.guard';

import { ModalTemplateComponent } from './components/modal-template/modal-template.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { NowPlayingCinemaMovies } from './components/articles-list/now-playing-cinema-movies/now-playing-cinema-movies.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { SliderComponent } from './components/slider/slider.component';
import { SliderItemDirective } from './directives/slider-item.directive';

import { MatIconRegistry, MatIconModule, MatCardModule } from '@angular/material';
import { CoomingSoonComicBooksComponent } from './components/articles-list/cooming-soon-comic-books/cooming-soon-comic-books.component';
import { DetailsModalComponent } from './components/articles-list/modal/details-modal/details-modal.component';
import { SetDatePipe } from './set-date.pipe';
import { SetReplacePipe } from './set-date.pipe';
import { SetDatePickerPipe } from './set-date.pipe';
import { SetDateFormatterPickerPipe } from './set-date.pipe';
import { SetReleaseYearPipe } from './set-date.pipe';
import { SetReleaseDatePipe } from './set-date.pipe';
import { SetImageValidatorPipe } from './set-date.pipe';

import { NgxLoadingModule } from 'ngx-loading';
import { AcademyAwardWinnersComponent } from './components/articles-list/academy-award-winners/academy-award-winners.component';
import { TvSeriesComponent } from './components/articles-list/tv-series/tv-series.component';
import { TvSeriesModalComponent } from './components/articles-list/modal/tv-series-modal/tv-series-modal.component';
import { PremierMoviesComponent } from './components/articles-list/premier-movies/premier-movies.component';
import { PremierMoviesModalComponent } from './components/articles-list/modal/premier-movies-modal/premier-movies-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ArticleViewComponent,
    ArticlesListComponent,
    ModalTemplateComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NowPlayingCinemaMovies,
    SliderComponent,
    SliderItemDirective,
    CoomingSoonComicBooksComponent,
    DetailsModalComponent,
    SetDatePipe,
    SetReplacePipe,
    SetDatePickerPipe,
    SetDateFormatterPickerPipe,
    SetReleaseYearPipe,
    SetReleaseDatePipe,
    SetImageValidatorPipe,
    AcademyAwardWinnersComponent,
    TvSeriesComponent,
    TvSeriesModalComponent,
    PremierMoviesComponent,
    PremierMoviesModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {}),
    MatCardModule,
    MatIconModule,
    NgxLoadingModule.forRoot({}),
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    DataService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalTemplateComponent,
    DetailsModalComponent,
    TvSeriesModalComponent,
    PremierMoviesModalComponent,
  ]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
