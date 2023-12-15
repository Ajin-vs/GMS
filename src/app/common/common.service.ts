import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);

  screenWidth$ = this.screenWidth.asObservable();

  constructor() {
    // Listen for window resize events
    window.addEventListener('resize', () => {      
      this.screenWidth.next(window.innerWidth);
    });
  }

  getCurrentScreenWidth(): number {
    return window.innerWidth;
  }
}
