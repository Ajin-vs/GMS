import { HttpClient } from '@angular/common/http';
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
  isSticky: boolean = false;

  constructor(private router: Router, private httpClient : HttpClient) {
    // Listen for window resize events
    window.addEventListener('resize', () => {      
      this.screenWidth.next(window.innerWidth);
    });
  }

  getCurrentScreenWidth(): number {
    return window.innerWidth;
  }

  handleScroll():Observable<any> {
    const split = this.router.url.split('/')[1];    
    const scrollPosition = window.scrollY;    
    this.isSticky = scrollPosition > 0 && !split.includes('dashboard');
    return of(this.isSticky);
  }

  public memberList():Observable<any>{
    return this.httpClient.get(`http://192.168.1.35:8000/api/member/list_member/1`);
  }
}
