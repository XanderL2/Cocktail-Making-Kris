import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { MatIconModule } from '@angular/material/icon';
import { ZeroIntPipe } from '../../../../shared/pipes/zero-int.pipe';

@Component({
  selector: 'app-profile',
  imports: [MatIconModule, ZeroIntPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {

  public timeNow: Date = new Date();
  private interval: any
  @Input({ required: true }) user!: User;


  ngOnInit(): void {
    setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  public updateTime() {
    this.timeNow = new Date();
  }

}
