import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Scroll, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-site';

  constructor(private loc: Location, private router: Router) {
    router.events
      .pipe(filter(e => e instanceof Scroll || e instanceof NavigationEnd))
      .subscribe(e => {
        console.log(e);
      });
  }

  locationBack() {
    window.history.back();
  }

  locationBackAngular() {
    this.loc.back();
  }
}
