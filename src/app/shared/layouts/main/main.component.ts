import { Component } from '@angular/core';
import { PolybarComponent } from "../../components/polybar/polybar.component";
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from "../../components/modal/modal.component";
import { ProfileComponent } from "../../../features/users/components/profile/profile.component";
import { User } from '../../../features/users/models/User';

@Component({
  selector: 'app-main',
  imports: [PolybarComponent, MatIconModule, ModalComponent, ProfileComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  public user: User = {
    profilePhoto: 'https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900',
    username: 'Kristofatico'
  }

}
