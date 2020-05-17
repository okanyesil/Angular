import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RestService} from './rest.service';
import {ContentRepository} from './content.repository';
import {CategoryRepository} from './category.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [RestService, ContentRepository, CategoryRepository]
})

export class ModelModule {

}
