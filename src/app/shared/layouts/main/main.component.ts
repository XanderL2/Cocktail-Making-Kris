import { Component } from '@angular/core';
import { PolybarComponent } from "../../components/polybar/polybar.component";
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from "../../components/modal/modal.component";
import { ProfileComponent } from "../../../features/users/components/profile/profile.component";

@Component({
  selector: 'app-main',
  imports: [PolybarComponent, MatIconModule, ModalComponent, ProfileComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
