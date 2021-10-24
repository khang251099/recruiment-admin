import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ProfilePage } from '../../pages/profile/profile.page';
import {MatButtonModule} from '@angular/material/button';
const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
]

@NgModule({
  declarations: [ProfilePage],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
