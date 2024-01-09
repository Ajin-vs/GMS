import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeesPopUpComponent } from '../fees-pop-up/fees-pop-up.component';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-member-crud',
  templateUrl: './member-crud.component.html',
  styleUrls: ['./member-crud.component.css']
})
export class MemberCrudComponent {
  constructor(private router: Router, private modalService: NgbModal, private commonService : CommonService) { }

  ngOnInit(){
    window.scrollTo(0, 0);
 this.commonService.memberList().subscribe(res=>{
  
 })
  }

  openModal(): void {    
    const modalRef = this.modalService.open(FeesPopUpComponent, { centered: true, backdrop: true }) ;
    modalRef.componentInstance.title = 'Modal Title';
    modalRef.componentInstance.content = 'This is the content of the modal.';
    modalRef.componentInstance.saveFees = this.saveFees.bind(this);
  }

  saveFees(){
    console.log("save fees");
    
  }
}
