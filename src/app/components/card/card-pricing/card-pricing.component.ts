import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {

  @Input()
  gameType:string="Digital Steam"
  @Input()
  gamePrice:string="R$ 1,99"

}
