import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-lady-image',
  templateUrl: './lady-image.component.html'
})
export class LadyImageComponent {


  @Input()
  public url!: string;

  @Input()
  public alt: string = "";

  public hasLoaded:boolean = false;

  onLoad(){
    this.hasLoaded = true;

  }


}
