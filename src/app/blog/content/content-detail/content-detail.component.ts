import { Component, OnInit } from '@angular/core';
import {ContentRepository} from '../../../model/content.repository';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  constructor(private contentRepository: ContentRepository, private router: ActivatedRoute, private yonlendir: Router) { }

  ngOnInit() {
  }
  getContentById() {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    return this.contentRepository.getContentById(id);
  }
  getAnasayfa() {
    this.yonlendir.navigateByUrl('content');
  }

}
