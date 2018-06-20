import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UnderlineButtonComponent } from './common/underline-button/underline-button.component';
import { AddButtonComponent } from './add-button/add-button.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PostComponent } from './common/post/post.component';
import { PostListComponent } from './common/post-list/post-list.component';
import { AddEntryComponent } from './common/add-entry/add-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UnderlineButtonComponent,
    AddButtonComponent,
    PostComponent,
    PostListComponent,
    AddEntryComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule
  ],
  entryComponents: [
    AddEntryComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
