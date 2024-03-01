import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-memeber-ship-list',
  templateUrl: './memeber-ship-list.component.html',
  styleUrls: ['./memeber-ship-list.component.css']
})
export class MemeberShipListComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  ngOnInit(){
    window.scrollTo(0, 0);    
  }
}
