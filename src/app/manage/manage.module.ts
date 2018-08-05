import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodesComponent } from './nodes/nodes.component';
import { ConnectorsComponent } from './connectors/connectors.component';

const manageRoutes: Routes = [
  { path: '', redirectTo: 'nodes', pathMatch: 'full' },
  {
    path: 'nodes',
    component: NodesComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(manageRoutes)
  ],
  exports: [RouterModule],
  declarations: [NodesComponent, ConnectorsComponent]
})
export class ManageModule { }
