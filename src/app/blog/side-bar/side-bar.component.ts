import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryRepository} from '../../model/category.repository';
import {CategoryModel} from '../../model/category.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public selectedCategory: CategoryModel = null;
  @Output() category = new EventEmitter<CategoryModel>();
  constructor(private service: CategoryRepository,  private router: Router) { }

  ngOnInit() {
  }

  getCategories() {
    return this.service.getCategories();
  }
  changeCategory(newCategory?: CategoryModel) {
    this.selectedCategory = newCategory;
    this.category.emit(newCategory);
    this.router.navigateByUrl('content/' + this.selectedCategory.name);

  }


}
