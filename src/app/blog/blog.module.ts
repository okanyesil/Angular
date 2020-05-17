import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {ContentDetailComponent} from './content/content-detail/content-detail.component';
import { BanaUlasinComponent } from './bana-ulasin/bana-ulasin.component';
import {FormsModule} from '@angular/forms';
import { HhakkimdaComponent } from './hhakkimda/hhakkimda.component';


const routes: Routes = [
  {path: 'anasayfa', component: ContentComponent },
  {path: 'content/:category', component: ContentComponent },
  {path: 'content/content-detail/:id', component: ContentDetailComponent},
  {path: 'content/bana-ulasin', component: BanaUlasinComponent},
  {path: 'bana-ulasin', component: BanaUlasinComponent},
  {path: 'hakkimda', component: HhakkimdaComponent},
  {path: 'admin', loadChildren: '../admin/admin.module#AdminModule'},
  {path: '**', component: ContentComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  providers: [],
  exports: [RouterModule],
  declarations: [BanaUlasinComponent, HhakkimdaComponent]
})

export class BlogModule {}

