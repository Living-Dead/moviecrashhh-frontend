import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal-basic';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ModalTemplateComponent } from './modal-template/modal-template.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ArticleViewComponent,
    NgbdModalBasic,
    ArticlesListComponent,
    ModalTemplateComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [ModalTemplateComponent]
})
export class AppModule { }
