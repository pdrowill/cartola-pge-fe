//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
//Components
import { AppComponent } from './app.component';
import { PartialListComponent } from './partial/partial-list/partial-list.component';
//Everything else
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { PartialService } from './partial/partial.service';
import { routes } from './app.routes';
import { PartialItemComponent } from './partial/partial-item/partial-item.component';
@NgModule({
  declarations: [
    AppComponent,
    PartialListComponent,
    PartialItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [ PartialService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
