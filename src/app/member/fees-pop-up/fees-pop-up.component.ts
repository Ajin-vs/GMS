import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fees-pop-up',
  templateUrl: './fees-pop-up.component.html',
  styleUrls: ['./fees-pop-up.component.css']
})
export class FeesPopUpComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  constructor(public activeModal: NgbActiveModal) {}

}
