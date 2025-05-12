import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { PolybarComponent } from "../../components/polybar/polybar.component";
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from "../../components/modal/modal.component";
import { ProfileComponent } from "../../../features/users/components/profile/profile.component";
import { User } from '../../../features/users/models/User';
import { SearcherComponent } from "../../components/searcher/searcher.component";
import { ButtonComponent } from "../../components/button/button.component";
import { MusicPlayerComponent } from "../../components/music-player/music-player.component";
import { Song } from '../../components/music-player/models/Song';
import { Songs } from '../../components/music-player/models/Songs';

@Component({
  selector: 'app-main',
  imports: [PolybarComponent, MatIconModule, ModalComponent, ProfileComponent, SearcherComponent, ButtonComponent, MusicPlayerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  //? Properties
  public showProfile: boolean = false;

  public showSearchMenu: boolean = false;

  public showFilterMenu: boolean = false;

  public Songs: Song[] = Songs;
  public showMusicPlayer: boolean = false;

  public user: User = {
    profilePhoto: 'https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900',
    username: 'Kristofatico'
  }



  //? Polybar Buttons Handlers
  public onClickProfile = (): void => {
    let prevStatusProfile = this.showProfile;
    this.closeAllMenus();  
    this.showProfile = !prevStatusProfile;
  }

  public onClickSearch() : void{
    let prevStatusSearch = this.showSearchMenu;
    this.closeAllMenus();  
    this.showSearchMenu = !prevStatusSearch;
  }

  public onClickFilter() : void{
    let prevFilterStatus= this.showFilterMenu;
    this.closeAllMenus();  
    this.showFilterMenu = !prevFilterStatus;
  }

  public onClickMusicPlayer() : void{
    let prevMusicPlayerStatus= this.showMusicPlayer;
    this.closeAllMenus();  
    this.showMusicPlayer = !prevMusicPlayerStatus;
  }

 

  public onApplySearchFilter = (e: Event) : void => {
    e.preventDefault();
    this.showSearchMenu = false;
    this.showFilterMenu = true;
  }





  //? Methods
  private closeAllMenus() : void {
    this.showProfile = false;
    this.showSearchMenu = false; 
    this.showFilterMenu = false; 
    this.showMusicPlayer = false; 
  }

}
