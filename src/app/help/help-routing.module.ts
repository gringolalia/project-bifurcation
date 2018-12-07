import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help/help.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
  },
  {
    path: 'shortcuts',
    component: ShortcutsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
