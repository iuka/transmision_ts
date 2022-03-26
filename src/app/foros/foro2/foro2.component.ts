import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-foro2',
  templateUrl: './foro2.component.html',
  styleUrls: ['./foro2.component.scss']
})
export class Foro2Component implements OnInit {
  modalRef: MDBModalRef;
  constructor(private modalService: MDBModalService) { }

  ngOnInit(): void {
  }
  foro(id){
    this.modalRef = this.modalService.show(ModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-lg',
      containerClass: 'top',
      animated: true,
      data: {
        content: { ident: id}
      }
    });
  } 

}
