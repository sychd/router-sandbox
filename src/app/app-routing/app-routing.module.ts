import { MenuComponent } from './../menu/menu.component';
import { WrapperComponent } from './../wrapper/wrapper.component';
import { WelcomePageComponent } from './../welcome-page/welcome-page.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    component: WrapperComponent,
    children: [
      { path: 'welcome', component: WelcomePageComponent },
      { path: 'welcome', component: MenuComponent, outlet: 'menu' },
      { path: 'welcome', component: WelcomePageComponent, outlet: 'content' }
    ]
  },
  {
    path: 'manage',
    // loadChildren: '../manage/manage.module#ManageModule' //if there is no baseUrl in tsconfig.app..json
    loadChildren: 'app/manage/manage.module#ManageModule' //if there is baseUrl in tsconfig.app..json

  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
