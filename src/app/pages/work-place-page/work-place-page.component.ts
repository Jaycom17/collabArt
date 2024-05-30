import {
  Component,
} from '@angular/core';
import { DrawAreaComponent } from '../../components/draw-area/draw-area.component';

@Component({
  selector: 'app-work-place-page',
  standalone: true,
  imports: [DrawAreaComponent],
  templateUrl: './work-place-page.component.html',
  styleUrl: './work-place-page.component.css'
})
export class WorkPlacePageComponent {
}
