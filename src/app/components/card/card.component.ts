import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  gameCover:string=""
  @Input()
  gameLabel:string=""
  @Input()
  gameType:string="Digital Steam"
  @Input()
  gamePrice:string="R$ 1,99"
}
