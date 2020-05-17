import { Component, OnInit } from '@angular/core';
import {ContentRepository} from '../../model/content.repository';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private service: ContentRepository, private router: Router, private activeRouter: ActivatedRoute) {}

  getContent() {
    const category = this.activeRouter.snapshot.paramMap.get('category');
    console.log(category);
    if (category === 'Anasayfa') {
      return this.service.getContent();
    } else if (category === 'Bana ulaşın') {
      this.router.navigateByUrl('/bana-ulasin');
      return;
    }
    return this.service.getContent(category);
  }



  ngOnInit() {
  }
  readMore(id: number) {
    this.router.navigateByUrl('content/content-detail/' + id);

  }

}
