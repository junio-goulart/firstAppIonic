import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'location',
        loadChildren: () => import('../location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'compass',
        loadChildren: () => import('../compass/compass.module').then(m => m.CompassPageModule)
      },
      {
        path: 'hotels',
        loadChildren: () => import('../hotels/hotels.module').then(m => m.HotelsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/location',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/location',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
