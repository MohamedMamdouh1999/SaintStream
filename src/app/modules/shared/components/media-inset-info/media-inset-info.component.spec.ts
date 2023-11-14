import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaInsetInfoComponent } from './media-inset-info.component';

describe('MediaInsetInfoComponent', () => {
  let component: MediaInsetInfoComponent;
  let fixture: ComponentFixture<MediaInsetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaInsetInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaInsetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
