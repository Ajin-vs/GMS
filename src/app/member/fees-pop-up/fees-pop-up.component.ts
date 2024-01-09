import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fees-pop-up',
  templateUrl: './fees-pop-up.component.html',
  styleUrls: ['./fees-pop-up.component.css']
})
export class FeesPopUpComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() saveFees: () => any = () => {}; // Provide an empty function as a default

  constructor(public activeModal: NgbActiveModal) {}

  saveFee(){
    this.saveFees();
    this.activeModal.close('Save click');  }

}
