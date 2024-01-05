import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeesPopUpComponent } from '../fees-pop-up/fees-pop-up.component';

@Component({
  selector: 'app-member-crud',
  templateUrl: './member-crud.component.html',
  styleUrls: ['./member-crud.component.css']
})
export class MemberCrudComponent {
  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(){
    window.scrollTo(0, 0);
  }

  openModal(): void {
    console.log("here");
    
    const modalRef = this.modalService.open(FeesPopUpComponent);
    modalRef.componentInstance.title = 'Modal Title';
    modalRef.componentInstance.content = 'This is the content of the modal.';
  }
}
