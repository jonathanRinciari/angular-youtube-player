import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularYoutubePlayerComponent } from './angular-youtube-player.component';

describe('AngularYoutubePlayerComponent', () => {
  let component: AngularYoutubePlayerComponent;
  let fixture: ComponentFixture<AngularYoutubePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularYoutubePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularYoutubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
