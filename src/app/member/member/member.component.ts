import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Event as NavigationEvent } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  selectedTabIndex: number = 1; // Set the default tab index
  tabs: any = [];
  isUpdate:boolean = false;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute, private router: Router, private commonService : CommonService){
   
  }

  ngOnInit(){
    this.commonService.memberTabs.subscribe(tabs=> {this.tabs = tabs  
        let currentRoute = this.router.url.split('/')[2];
        let initialIndex = this.tabs.findIndex((tab: any) => tab?.path == currentRoute);
        this.selectedTabIndex = initialIndex;
     });
     this.router.events
     .subscribe(
       (event: NavigationEvent) => {
         if (event instanceof NavigationStart) {
           const currentRoute = event.url.split('/')[2];
           let initialIndex =this.tabs.findIndex((tab:any)=>tab?.path == currentRoute);
           this.selectedTabIndex = initialIndex;
         }
       }); 
    if(this.isUpdate){
      this.tabs.push({label:'Update', index:1,path:'memberAdd',icon:'edit'});
    }
  }
  // Add a method to handle tab changes
  tabChanged(event: any) {
    this.selectedTabIndex = event.index;
    switch (this.selectedTabIndex) {
      case 0:  this.router.navigateByUrl('member/memberList');
        break;
      case 1: this.router.navigateByUrl('member/memberAdd');
        break;
      default:
        break;
    }    
  }
}
