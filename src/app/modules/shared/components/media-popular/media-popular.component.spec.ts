import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPopularComponent } from './media-popular.component';

describe('MediaPopularComponent', () => {
  let component: MediaPopularComponent;
  let fixture: ComponentFixture<MediaPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPopularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
