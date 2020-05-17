import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'admin', component: AdminComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [AdminComponent],
  exports: [AdminComponent],
  providers: []
})

export class AdminModule {}

