import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { CommonService } from '../common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  selectedTabIndex: number = 0; // Set the default tab index
  @Input() tabs: any[] = [];
  @Output() tabChanges = new EventEmitter<any>();
  private routerSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router, private commonService: CommonService) {

  }

  ngOnInit() {
    // console.log(this.moduleName);
    this.routerSubscription = this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationStart) {
            const currentRoute = event.url.split('/')[2];
            let initialIndex = this.tabs.findIndex((tab: any) => tab?.path == currentRoute);
            if (initialIndex !== -1) {
              this.selectedTabIndex = initialIndex;
            }
          }
        });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tabs']) {
      window.scrollTo(0, 0);
      // console.log("changed")
      const currentRoute = this.router.url.split('/')[2];
      const initialIndex = this.tabs.findIndex((tab: any) => tab?.path == currentRoute);
      if (initialIndex !== -1) {
        this.selectedTabIndex = initialIndex;
      }
    }
  }

  // Add a method to handle tab changes
  tabChanged(event: any) {
    this.tabChanges.emit(event);
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
