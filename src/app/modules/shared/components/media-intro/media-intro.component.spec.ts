import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaIntroComponent } from './media-intro.component';

describe('MediaIntroComponent', () => {
  let component: MediaIntroComponent;
  let fixture: ComponentFixture<MediaIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaIntroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
