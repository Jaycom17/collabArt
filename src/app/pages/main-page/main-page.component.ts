import { Component } from '@angular/core';
import { AsideBarComponent } from '../../components/aside-bar/aside-bar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AsideBarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  
}
