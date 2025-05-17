import { Component, inject } from '@angular/core';
import { PolybarComponent } from "../../components/polybar/polybar.component";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ModalComponent } from "../../components/modal/modal.component";
import { ProfileComponent } from "../../../features/users/components/profile/profile.component";
import { User } from '../../../features/users/models/User';
import { SearcherComponent } from '../../components/searcher/searcher.component';
import { ButtonComponent } from "../../components/button/button.component";
import { MusicPlayerComponent } from "../../components/music-player/music-player.component";
import { Song } from '../../components/music-player/models/Song';
import { Songs } from '../../components/music-player/models/Songs';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from "../../components/input/input.component";
import { DrinkService } from '../../../features/cocktails/services/Drink.service';
import { Filters } from 'src/app/features/cocktails/models/Filters';

@Component({
  selector: 'app-main',
  imports: [PolybarComponent, MatIconModule, ModalComponent, ProfileComponent, SearcherComponent, ButtonComponent, MusicPlayerComponent, RouterOutlet, FormsModule, InputComponent, MatIconModule, ReactiveFormsModule], templateUrl: './main.component.html', styleUrl: './main.component.scss'
})
export class MainComponent {


  //? Services:
  private DrinkService = inject(DrinkService);

  //? Modals properties:
  public showProfile: boolean = false;
  public showSearchMenu: boolean = false;
  public showFilterMenu: boolean = false;
  public Songs: Song[] = Songs;
  public showMusicPlayer: boolean = false;

  //? Forms properties
  public drinkName: string = "";
  public filtersForm: FormGroup;

  public user: User = {
    profilePhoto: 'https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900',
    username: 'Kristofatico'
  }


  constructor(){

    this.filtersForm = new FormGroup({
      flavour: new FormControl(""),    
      type: new FormControl(""),      
      alcoholic: new FormControl(null), 
      orderAscendingByPrice: new FormControl(null) 
    });

  }




  //? Polybar forms Hanlders:
  public onSearch = (e: Event) =>  {
    e.preventDefault();

    if(!this.drinkName){
      console.error("No drinkName")
      return;
    }

    this.DrinkService.dataOrigin = 'filter';
    this.DrinkService.GetRelatedDrinks({name: this.drinkName});
  }

  public onApplyFilters = () => {

    const formValues: any = this.filtersForm.value;
    let filters: any = {};

    for (let key in formValues) {

      const value = formValues[key as keyof Filters];

      if (value !== undefined && value !== null && value !== '') {
        filters[key as keyof Filters] = value;
      }
    }


    this.DrinkService.dataOrigin = 'filter';
    this.DrinkService.GetRelatedDrinks(filters);


  }




  //? Polybar Buttons Handlers
  public onClickProfile = (): void => {
    let prevStatusProfile = this.showProfile;
    this.closeAllMenus();
    this.showProfile = !prevStatusProfile;
  }

  public onClickSearch(): void {
    let prevStatusSearch = this.showSearchMenu;
    this.closeAllMenus();
    this.showSearchMenu = !prevStatusSearch;
  }

  public onClickFilter(): void {
    let prevFilterStatus = this.showFilterMenu;
    this.closeAllMenus();
    this.showFilterMenu = !prevFilterStatus;
  }

  public onClickMusicPlayer(): void {
    let prevMusicPlayerStatus = this.showMusicPlayer;
    this.closeAllMenus();
    this.showMusicPlayer = !prevMusicPlayerStatus;
  }

  public onApplySearchFilter = (e: Event): void => {
    e.preventDefault();
    this.showSearchMenu = false;
    this.showFilterMenu = true;
  }



  //? Methods
  private closeAllMenus(): void {
    this.showProfile = false;
    this.showSearchMenu = false;
    this.showFilterMenu = false;
    this.showMusicPlayer = false;
  }


  //? Outputs controllers:
  public getDrinkName(e: {name: string, value: string}): void {
    this.drinkName = e.value;
  }


}
