import { TestBed } from '@angular/core/testing';

import { AngularYoutubePlayerService } from './angular-youtube-player.service';

describe('AngularYoutubePlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularYoutubePlayerService = TestBed.get(AngularYoutubePlayerService);
    expect(service).toBeTruthy();
  });
});
