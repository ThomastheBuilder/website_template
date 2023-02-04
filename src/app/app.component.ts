import { Component, createPlatform, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WEBSITE_TEMPLATE';
  constructor(private router: Router) { }
  
  ngOnInit(): void {
      this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)) {
        return;
        }
      window.scrollTo(0, 0)
      });
  }

}
