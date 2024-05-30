import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPlacePageComponent } from './work-place-page.component';

describe('WorkPlacePageComponent', () => {
  let component: WorkPlacePageComponent;
  let fixture: ComponentFixture<WorkPlacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkPlacePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkPlacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
