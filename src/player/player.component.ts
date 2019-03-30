import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import youTubePlayer from 'youtube-player';
import { Subject } from 'rxjs';


interface Config {
  videoId: string;
  width: string;
  height: string;
}
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('player') player: ElementRef;
  @Input() config: {
    videoId?: string;
    videoUrl?: string;
    width?: string;
    height?: string;
    startSeconds?: number;
    autoPlay?: boolean;
    mediaContentUrl?: string;
    endSeconds?: number;
    suggestedQuality?: 'large' | 'medium' | 'small'
  };
  @Input() videosList: string[];
  @Output() ready = new EventEmitter();
  @Output() play = new EventEmitter();
  @Output() pause = new EventEmitter();
  @Output() error = new EventEmitter();
  @Output() end = new EventEmitter();
  @Output() stateChange = new EventEmitter();
  @Output() playbackRateChange = new EventEmitter();
  @Output() playbackQualityChange = new EventEmitter();
  private _player: any;
  private eventListeners = [
    'ready',
    'error',
    'play',
    'pause',
    'end',
    'stateChange',
    'playbackRateChange',
    'playbackQualityChange'
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

}
