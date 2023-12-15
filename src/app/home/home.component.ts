import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ismobileView = true;
  private screenWidthSubscription: Subscription;

  constructor(private responsiveService: CommonService) {
    // Subscribe to screen width changes
    this.screenWidthSubscription = this.responsiveService.screenWidth$.subscribe(
      (width: number) => {
        this.handleScreenWidthChange(width);
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.screenWidthSubscription.unsubscribe();
  }

  private handleScreenWidthChange(width: number): void {
    // Example: Toggle visibility based on screen width
    this.ismobileView = width >= 900;
  }
}
