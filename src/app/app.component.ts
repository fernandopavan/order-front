import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title = 'order-front';

  hasPermition = false;

  navigationSubscription: any;

  constructor(
    private router: Router,
    public auth: AuthService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialise();
      }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }

  initialise() {
    if (localStorage.getItem('localUser') == null) {
      this.hasPermition = false;
    } else {
      this.hasPermition = true;
    }
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
