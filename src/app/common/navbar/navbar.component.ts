import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('collapseExpand', [
      state(
        'collapses',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          display: 'none',
        })
      ),
      state(
        'shows',
        style({
          height: '*',
          overflow: 'visible',
          opacity: '1',
          display: 'block',
        })
      ),
      transition('collapses => shows', animate('300ms ease-out')),
      transition('shows => collapses', animate('300ms ease-in')),
    ]),
  ],
})
export class NavbarComponent {
  items: any[] = [];
  currentItem = '';
  event$
  selectedItem = '';
  constructor(private router: Router) {
    const split = this.router.url.split('/')[1];
    this.currentItem = split.charAt(0).toUpperCase() + split.slice(1) ? split.charAt(0).toUpperCase() + split.slice(1) : 'Dashboard';
    this.selectedItem = split.charAt(0).toUpperCase() + split.slice(1) ? split.charAt(0).toUpperCase() + split.slice(1) : 'Dashboard';
    if (this.router.url.includes('dashboard')) {
      this.currentItem = 'Dashboard'
      this.selectedItem = 'Dashboard'
    }
    this.event$
      = this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if (event instanceof NavigationStart) {
              // console.log(event.url);
              const split = event.url.split('/')[1];

              this.currentItem = split.charAt(0).toUpperCase() + split.slice(1) ? split.charAt(0).toUpperCase() + split.slice(1) : 'Dashboard';
              this.selectedItem = split.charAt(0).toUpperCase() + split.slice(1) ? split.charAt(0).toUpperCase() + split.slice(1) : 'Dashboard';
              if (event.url.includes('dashboard')) {
                this.currentItem = 'Dashboard'
                this.selectedItem = 'Dashboard'
              }
            }
          });
  }
  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'fa-gauge',
        path: 'dashboard',
        items: []
      },
      {
        label: 'Member',
        icon: 'fa-user-group',
        items: [
          {
            label: 'Member List',
            icon: 'pi pi-fw pi-bookmark',
            path: 'member/memberList'
          },
          {
            label: 'Member Enrollment',
            icon: 'pi pi-fw pi-video',
            path: 'member/memberAdd'
          }
        ]
      },
      {
        label: 'Attendance',
        icon: 'fa-user-check',
        items: [
          {
            label: 'Add Attendance',
            icon: 'pi pi-fw pi-bookmark',
            path: 'attendance/addAttendance'
          }
        ]
      },
      {
        label: 'Report',
        icon: 'fa-magnifying-glass-chart',
        items: [
          {
            label: 'Attendance Report',
            icon: 'pi pi-fw pi-bookmark',
          },
          {
            label: 'Student Report',
            icon: 'pi pi-fw pi-bookmark',
          },
          {
            label: 'Teacher Report',
            icon: 'pi pi-fw pi-bookmark',
          }
        ]
      }
    ]

  }
  isCollapse(label: string) {
    return label === this.currentItem ? false : true
  }
  toggleCollapse(label: string) {
    label === this.currentItem ? this.currentItem = "" : this.currentItem = label;
  }
  subMenuSelected(subMenu: any) {
    this.selectedItem = subMenu.label;
  }
}
