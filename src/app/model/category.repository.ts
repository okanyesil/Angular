import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {CategoryModel} from './category.model';

@Injectable()
export class CategoryRepository {
  private categories: CategoryModel[] = [];
  constructor(private restService: RestService) {
    this.restService.getCategory().subscribe(categories => {
      this.categories = categories;
    });
  }

  getCategories(): CategoryModel[] {
    return this.categories;
  }


}
