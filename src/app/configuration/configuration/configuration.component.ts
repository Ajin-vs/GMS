import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Event as NavigationEvent } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
  animations: [
    trigger('navAnimation', [
      state('show', style({
        top: '0'
      })),
      state('hide', style({
        top: '80px', // Adjust the height of your nav component
      })),
      transition('show <=> hide', animate('0.1s ease-in-out')),
    ]),
  ],
})
export class ConfigurationComponent {
  selectedTabIndex: number = 1; // Set the default tab index
  tabs: any = [];
  isUpdate:boolean = false;
  private destroy$: Subject<void> = new Subject<void>();
  isSticky!:boolean;
  constructor(private route: ActivatedRoute, private router: Router, private commonService : CommonService){
   
  }

  ngOnInit(){
    this.commonService.configurationTabs.subscribe(tabs=> {this.tabs = tabs  
     });
    if(this.isUpdate){
      this.tabs.push({label:'Update', index:1,path:'memberAdd',icon:'edit'});
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.commonService.handleScroll().subscribe(res=> {this.isSticky = res
    console.log(res);
    });
  }
  // Add a method to handle tab changes
  tabChanges(event: any) {
    this.selectedTabIndex = event.index;
    switch (this.selectedTabIndex) {
      case 0:  this.router.navigateByUrl('configuration/subscriptionList');
        break;
      case 1: this.router.navigateByUrl('configuration/subscriptionType');
        break;
      default:
        break;
    }    
  }
  
}
