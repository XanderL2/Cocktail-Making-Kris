import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: 'app-term',
  standalone: true,
  imports: [],
  templateUrl: './term.component.html',
  styleUrl: './term.component.scss'
})
export class TermComponent {

  @Input() row!: string | null;
  @Input() column!: string | null;

  @HostBinding('style.grid-row') get gridRow(): string | null {
    return this.row;
  }

  @HostBinding('style.grid-column') get gridColumn(): string | null {
    return this.column;
  }
}
