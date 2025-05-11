import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { PolybarComponent } from "../../components/polybar/polybar.component";
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from "../../components/modal/modal.component";
import { ProfileComponent } from "../../../features/users/components/profile/profile.component";
import { User } from '../../../features/users/models/User';
import { SearcherComponent } from "../../components/searcher/searcher.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-main',
  imports: [PolybarComponent, MatIconModule, ModalComponent, ProfileComponent, SearcherComponent, ButtonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  public showProfile: boolean = false;
  public showSearchMenu: boolean = false;
  public showFilterMenu: boolean = false;

  public user: User = {
    profilePhoto: 'https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900',
    username: 'Kristofatico'
  }


  public onApplySearchFilter = (e: Event) : void => {
    e.preventDefault();
    this.showSearchMenu = false;
    this.showFilterMenu = true;
  }

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

  private closeAllMenus() : void {
    this.showProfile = false;
    this.showSearchMenu = false; 
    this.showFilterMenu = false; 
  }
}
