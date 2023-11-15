import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMediaComponent } from './popular-media.component';

describe('PopularMediaComponent', () => {
  let component: PopularMediaComponent;
  let fixture: ComponentFixture<PopularMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
