import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoindexComponent } from './autoindex/autoindex.component';
import { DirectoryComponent } from './autoindex/directory/directory.component';
import { FileComponent } from './autoindex/file/file.component';
import { LoadingComponent } from './autoindex/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoindexComponent,
    LoadingComponent,
    DirectoryComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
