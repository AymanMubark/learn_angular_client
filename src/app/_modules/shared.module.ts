import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxGalleryModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  exports:[
    BsDropdownModule,
    TabsModule,
    ToastrModule,
    NgxGalleryModule
  ]
})
export class SharedModule { }
