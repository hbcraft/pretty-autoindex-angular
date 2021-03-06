import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AutoindexComponent } from './autoindex/autoindex.component'
import { ItemComponent } from './autoindex/item/item.component'
import { LoadingComponent } from './autoindex/loading/loading.component'

@NgModule({
  declarations: [
    AppComponent,
    AutoindexComponent,
    LoadingComponent,
    ItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
