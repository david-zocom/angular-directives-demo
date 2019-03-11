import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
	toggleButtonState: boolean = true;
	message: string = 'på';

	constructor() { }

	ngOnInit() {
	}

	handleClick() {
		this.toggleButtonState = !this.toggleButtonState;
		if( this.toggleButtonState ) {
			this.message = 'på';
		} else {
			this.message = 'av';
		}
	}

}
