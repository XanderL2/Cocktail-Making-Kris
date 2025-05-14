import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Song } from './models/Song';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-player',
  imports: [MatIconModule, CommonModule],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent {

  @Input({ required: true }) Songs!: Song[];

  public currentSongIndex: number = 0;
  public isPlaying: boolean = false;

  @ViewChild('audio') audioElement!: ElementRef<HTMLAudioElement>;
  @ViewChild('progressBar') progressBar!: ElementRef<HTMLDivElement>;
  @ViewChild('bar') timeBar!: ElementRef<HTMLDivElement>;


  onPlaying(): void {

    this.isPlaying = !this.isPlaying;

    if (!this.isPlaying) {
      this.audioElement.nativeElement.pause();
      return;
    }

    this.audioElement.nativeElement.play();
  }

  onProgress(): void {
    let progress = Math.round((this.audioElement.nativeElement.currentTime / this.audioElement.nativeElement.duration) * 100);
    this.progressBar.nativeElement.style.width = progress + "%";
  }



  nextSong(): void {

    this.progressBar.nativeElement.style.width = 0 + "%";

    if (this.currentSongIndex >= this.Songs.length - 1) {
      this.currentSongIndex = 0;
      return;
    }
    this.currentSongIndex++;
  }


  previousSong() : void {
    this.progressBar.nativeElement.style.width = 0 + "%";

    if(this.currentSongIndex <= 0){
      this.currentSongIndex = this.Songs.length - 1;
      return;
    }    

    this.currentSongIndex--;
  }

  onLoadSrc() : void {
    if(this.isPlaying) this.audioElement.nativeElement.play();
  }


  onClickBar(e: MouseEvent): void {

    const barWidth = this.timeBar.nativeElement.clientWidth;   
    const clickPosition = e.offsetX;

    const clickPercentage= (clickPosition / barWidth) * 100;
    this.progressBar.nativeElement.style.width = clickPercentage + "%";    
    this.audioElement.nativeElement.currentTime = (clickPercentage / 100) * this.audioElement.nativeElement.duration;

  }

  onEndSong(): void {
    this.nextSong();  
  }


  //? Getters 
  public get CurrentSong(): Song {
    return this.Songs[this.currentSongIndex];
  }



}
