import { Injectable } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);

  screenWidth$ = this.screenWidth.asObservable();
  memberTabs:BehaviorSubject<any> = new BehaviorSubject([{label:'List', index:0, path:'memberList', icon:'list'},{label:'Add', index:1,path:'memberAdd',icon:'person_add'}]);
  attendanceTabs:BehaviorSubject<any> = new BehaviorSubject([{label:'List', index: 0},{label:'Add', index:1}]);
  constructor(private router: Router) {
    // Listen for window resize events
    window.addEventListener('resize', () => {      
      this.screenWidth.next(window.innerWidth);
    });
  }

  getCurrentScreenWidth(): number {
    return window.innerWidth;
  }

}
