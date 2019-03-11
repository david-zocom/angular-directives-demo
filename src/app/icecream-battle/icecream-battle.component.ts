import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-icecream-battle',
  templateUrl: './icecream-battle.component.html',
  styleUrls: ['./icecream-battle.component.css']
})
export class IcecreamBattleComponent implements OnInit {
	flavours: string[] = [
		'pistage',
		'chocolate fudge brownie',
		'rostig spik',
		'mjölksyra',
		'enhörningsblod'
	];
	bestFlavour: string = '';

	constructor() { }

	ngOnInit() {
	}

}
