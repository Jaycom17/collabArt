import { Component } from '@angular/core';
import { AsideBarComponent } from '../../components/aside-bar/aside-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [AsideBarComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  constructor(private router: Router) {}

  goToMainPage() {
    this.router.navigate(['/']);
  }
}
