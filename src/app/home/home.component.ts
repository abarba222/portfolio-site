import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../api.service';

@Component({  
	selector: 'app-home',  
	templateUrl: './home.component.html',  
	styleUrls: ['./home.component.scss']  
})  
export class HomeComponent implements OnInit {

	menu = false;
	
	constructor(private apiService: ApiService) { }
	ngOnInit() {
		
	}

	toggleMenu() {
		this.menu = !this.menu;
	}

	aboutScroll() {
		window.scrollTo({top: -110, behavior: 'smooth'});
	  }
	
	  projectsScroll() {
		const pScroll = document.getElementById('projects');
		const headerOffset = 110;
		const pScrollPosition = pScroll.offsetTop;
		const offsetPosition = pScrollPosition - headerOffset;

		window.scrollTo({top: offsetPosition, behavior: 'smooth'});
	  }
	
	  contactScroll() {
		document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
	  }
}
