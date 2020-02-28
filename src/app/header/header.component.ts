import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

  // aboutScroll() {
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // }

  aboutScroll() {
    document.getElementById('#about').scrollIntoView();
  }

  projectsScroll() {
    window.scrollTo({top: 1980, left: 0, behavior: 'smooth'});
  }

  contactScroll() {
    window.scrollTo({top: 2610, left: 0, behavior: 'smooth'});
  }

}
