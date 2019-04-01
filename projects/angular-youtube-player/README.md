# Angular Tippy.JS Directive & Service

  This is a wrapper around the Tippy.js. Easily create tooltips using a directive or utilize the service


## Installation

Install Using NPM

```javascript
  npm install --save angular-tippy
```


## Adding Module 

```javascript

import { AppComponent } from './app.component';
import { AngularYoutubePlayerModule } from 'angular-youtube-player';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularYoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Usage

#### *.component.html
```html
<ng-youtube-player 
  (stateChange)="handleStateChange($event)"
  [config]="config">
</ng-youtube-player>
```


#### *.component.ts
```javascript
  export class AppComponent {
    config: PlayerConfig;
    constructor() {
      this.config = {
        videoId: 'eP4j6GF6iM8',
        autoPlay: false
      };
    }

    handleStateChange(event) {
      // Do Something when state changes i.e pause / play
    }
  }
```

## API

```typescript
  interface PlayerConfig {
    videoId?: string;
    width?: string;
    height?: string;
    startSeconds?: number;
    autoPlay?: boolean;
    mediaContentUrl?: string;
    endSeconds?: number;
    suggestedQuality?: 'large' | 'medium' | 'small';
  }

  interface AngularYoutubePlayerComponent {
    @ViewChild('player') private player: ElementRef;
    @Input() config: PlayerConfig;
    @Input() videosList: string[];
    @Output() ready: EventEmitter;
    @Output() error: EventEmitter;
    @Output() stateChange: EventEmitter;
    @Output() playbackRateChange: EventEmitter;;
    @Output() playbackQualityChange: EventEmitter;
  }
```


### PlayerConfig API

|                                                                                                              | 
|--------------------------------------------------------------------------------------------------------------| 
| Property Name,Property Type,Description                                                                      | 
| VideoId,String,The id of the video that you would like to embed                                              | 
| Width,String,"The width of the video player, i.e '300px'"                                                    | 
| Height,String,"The height of the video player, i.e '300px'"                                                  | 
| startSeconds,Number,The start time in seconds                                                                | 
| endSeconds,Number,The end time in seconds                                                                    | 
| autoPlayer,Boolean,If the video should auto play the video                                                   | 
| mediaContentUrl,String,The url of the video you would like to embed                                          | 
| suggestQuality,'large' | 'small' | 'medium' | 'hd720' | 'highres' | default,Specfiy the quality of the video | 


### AngularYoutubePlayerComponent API



    
## License



Apache License Version 2.0, January 2004
