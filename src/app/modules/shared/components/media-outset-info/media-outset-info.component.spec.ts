import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaOutsetInfoComponent } from './media-outset-info.component';

describe('MediaOutsetInfoComponent', () => {
  let component: MediaOutsetInfoComponent;
  let fixture: ComponentFixture<MediaOutsetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaOutsetInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaOutsetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
