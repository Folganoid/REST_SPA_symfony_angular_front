import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';
import {PostService} from './post.service';
import {AuthGuard} from './auth.guard';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', component : AppComponent},
    {path: 'login', component : LoginComponent},
    {path: 'posts', component : PostComponent},
    {path: 'add-post', component : AddPostComponent},
    {path: 'edit-post', component : EditPostComponent},
    {path: 'login', component : LoginComponent},
    ];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddPostComponent,
    EditPostComponent,
    DeletePostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(routes)
  ],
  providers: [AuthService, PostService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
