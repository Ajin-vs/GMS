import { Component, HostListener } from '@angular/core';
import { CommonService } from '../common.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  animations: [
    trigger('navAnimation', [
      state('show', style({
        top: '0',
      })),
      state('hide', style({
        top: '-50px', // Adjust the height of your nav component
      })),
      transition('show <=> hide', animate('0.1s ease-in-out')),
    ]),
  ],
})
export class TopbarComponent {
  isSticky:boolean = false;
  private destroy$: Subject<void> = new Subject<void>();
  constructor(private commonService: CommonService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.commonService.handleScroll().pipe(
      takeUntil(this.destroy$)).subscribe((res:any)=> {this.isSticky = res
    });
  }

  ngOnDestroy(): void {
    // Emit a value to notify all subscribers to complete
    this.destroy$.next();
    // Complete the subject to release resources
    this.destroy$.complete();
  }
}
