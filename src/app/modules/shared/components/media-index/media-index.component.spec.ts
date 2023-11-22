import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaIndexComponent } from './media-index.component';

describe('MediaIndexComponent', () => {
  let component: MediaIndexComponent;
  let fixture: ComponentFixture<MediaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
