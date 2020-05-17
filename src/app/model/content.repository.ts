import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {ContentModel} from './content.model';

@Injectable()

export class ContentRepository {
  private contents: ContentModel[] = [];

  constructor(private restService: RestService) {
    this.restService.getContent().subscribe(content => {
      this.contents = content;
    });
  }
  getContent(category?: string): ContentModel[] {
    if (category) {
      return this.contents.filter(content => {
        return content.category === category;
      });

    }
    return this.contents;
  }

  getContentById(id: number): ContentModel {
    return this.contents.find(content => content.id === id);
  }








}
