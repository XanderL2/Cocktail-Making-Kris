import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PolybarComponent } from "./shared/components/polybar/polybar.component";
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from "./shared/components/modal/modal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PolybarComponent, MatIconModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
