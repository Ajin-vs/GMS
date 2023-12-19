import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  ngOnInit(){
    console.log("List");
    
  }
}
