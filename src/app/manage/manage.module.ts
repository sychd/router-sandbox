import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodesComponent } from './nodes/nodes.component';
import { ConnectorsComponent } from './connectors/connectors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NodesComponent, ConnectorsComponent]
})
export class ManageModule { }
