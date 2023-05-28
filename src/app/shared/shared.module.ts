import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LadyImageComponent } from './components/lady-image/lady-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LadyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    LadyImageComponent
  ]
})
export class SharedModule { }
