import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-term',
  imports: [],
  templateUrl: './term.component.html',
  styleUrl: './term.component.scss'
})
export class TermComponent {

  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';  
  @Input() row!: number;
  @Input() column!: number;



  

}
