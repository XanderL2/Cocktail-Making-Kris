import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { ModalComponent } from "../modal/modal.component";
import { IconsService } from '../../../core/services/icons/icons.service';

@Component({
  selector: 'app-polybar',
  imports: [MatIconModule, ModalComponent],
  templateUrl: './polybar.component.html',
  styleUrl: './polybar.component.scss'
})
export class PolybarComponent {

  @Input() profilePhoto: string = "";
  @Input({ required: true }) showProfile!: boolean;
  @Input({ required: true }) onClickProfile!: () => void;

  private iconService: IconsService = inject(IconsService);

}
