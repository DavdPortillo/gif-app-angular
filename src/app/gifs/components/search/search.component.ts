import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  @ViewChild('valor')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService){}

  search() {
    const newTag = this.tagInput.nativeElement.value
    this.gifService.searchTag(newTag);

    this.tagInput.nativeElement.value = "";
  }


}
