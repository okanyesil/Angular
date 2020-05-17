import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './blog/navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { SideBarComponent } from './blog/side-bar/side-bar.component';
import { ContentComponent } from './blog/content/content.component';
import {ModelModule} from './model/model.module';
import { ContentDetailComponent } from './blog/content/content-detail/content-detail.component';
import {BlogModule} from './blog/blog.module';
import {AdminModule} from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NavbarComponent,
    SideBarComponent,
    ContentComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    BlogModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
