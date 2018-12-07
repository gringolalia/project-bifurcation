import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: 'app/home/home.module#HomeModule'
  },
  { 
    path: 'settings', 
    loadChildren: 'app/settings/settings.module#SettingsModule' 
  },
  { 
    path: 'help', 
    loadChildren: 'app/help/help.module#HelpModule' 
  },
  { 
    path: 'feedback', 
    loadChildren: 'app/feedback/feedback.module#FeedbackModule' 
  },
  { 
    path: 'profile', 
    loadChildren: 'app/profile/profile.module#ProfileModule'
  },
  { 
    path: 'search', 
    loadChildren: 'app/search/search.module#SearchModule'
  },
  { 
    path: 'customers', 
    loadChildren: 'app/customers/customers.module#CustomersModule'
  },
  { 
    path: 'orders', 
    loadChildren: 'app/orders/orders.module#OrdersModule' 
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }