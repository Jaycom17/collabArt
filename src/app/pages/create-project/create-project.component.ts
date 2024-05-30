import { Component } from '@angular/core';
import { AsideBarComponent } from '../../components/aside-bar/aside-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [AsideBarComponent],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent {
  constructor(private router: Router) { }

  goWorkPlace() {
    this.router.navigate(['/work-place']);
  }

}
