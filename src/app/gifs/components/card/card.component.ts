import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-app-card',
  templateUrl: './card.component.html'
})
export class CardComponent{

  @Input()
  public gif!: Gif;

}
