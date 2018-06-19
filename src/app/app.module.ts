import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UnderlineButtonComponent } from './common/underline-button/underline-button.component';
import { AddButtonComponent } from './add-button/add-button.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PostComponent } from './common/post/post.component';
import { PostListComponent } from './common/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UnderlineButtonComponent,
    AddButtonComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
