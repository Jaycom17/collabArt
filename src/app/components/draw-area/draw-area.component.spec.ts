import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawAreaComponent } from './draw-area.component';

describe('DrawAreaComponent', () => {
  let component: DrawAreaComponent;
  let fixture: ComponentFixture<DrawAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
