import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-component',
  templateUrl: './redirect-component.component.html',
  styleUrl: './redirect-component.component.css'
})
export class RedirectComponentComponent {
  constructor(private authService: MyserviceService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/panel']); // Redirect to protected route if logged in
    } else {
      this.router.navigate(['/signin']); // Redirect to login page if not logged in
    }
  }
}
