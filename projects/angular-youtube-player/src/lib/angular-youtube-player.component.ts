import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import youTubePlayer from 'youtube-player';
import { PlayerConfig } from './angular-youtube-player.model';

@Component({
  selector: 'ng-youtube-iframe',
  template: `
    <div #player>
    </div>
  `,
  styles: []
})
export class AngularYoutubePlayerComponent implements OnInit {
  @ViewChild('player') private player: ElementRef;
  @Input() config: PlayerConfig;
  @Input() videosList: string[];
  @Output() ready = new EventEmitter();
  @Output() error = new EventEmitter();
  @Output() stateChange = new EventEmitter();
  @Output() playbackRateChange = new EventEmitter();
  @Output() playbackQualityChange = new EventEmitter();
  private _player: any;
  private eventListeners = [
    'ready',
    'stateChange',
    'playbackQualityChange',
    'playbackRateChange',
    'error',
  ];

  constructor(
  ) {}

  ngOnInit() {
    this.manageVideoPlayerSetup();
  }

  manageVideoPlayerSetup() {
    this._player = new youTubePlayer(this.player.nativeElement);
    this.setupListeners();
    this.loadVideo();
    this.loadPlaylist();
  }


  loadVideo() {
    this.config && this.config.videoId ? this._player.loadVideoById(this.config) : this._player.loadVideoByUrl(this.config);
    this.config && this.config.autoPlay ? this._player.playVideo() : this._player.stopVideo();
  }


  setupListeners() {
    this.eventListeners.forEach((event) => this._player.on(event, (a) => {
      this[event].next(a);
    }));
  }

  loadPlaylist() {
    if (this.videosList) {
      this._player.loadPlaylist(this.videosList);
      this._player.loadPlaylist(this.videosList, this.config.startSeconds, this.config.suggestedQuality);
    }
  }

  onReady(e) {
    this.ready.next(e);
  }


}
