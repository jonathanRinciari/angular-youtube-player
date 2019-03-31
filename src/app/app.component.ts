import { Component } from '@angular/core';
import { PlayerConfig } from 'projects/angular-youtube-player/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: PlayerConfig = {
    videoId: 'eP4j6GF6iM8',
    autoPlay: false
  };

  handlePause(e) {
    console.log(e);
  }
}
