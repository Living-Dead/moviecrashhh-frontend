import { BrowserModule } from '@angular/platform-browser';
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
import { ArticlesListChildComponent } from './articles-list-child/articles-list-child.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

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
    ArticlesListChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {}),
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    DataService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalTemplateComponent]
})
export class AppModule { }
