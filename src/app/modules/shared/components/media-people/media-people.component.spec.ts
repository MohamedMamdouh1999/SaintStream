import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPeopleComponent } from './media-people.component';

describe('MediaPeopleComponent', () => {
  let component: MediaPeopleComponent;
  let fixture: ComponentFixture<MediaPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPeopleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
