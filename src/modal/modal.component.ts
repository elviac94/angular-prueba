import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    @Input() cow;
    @Output() close = new EventEmitter();

    onClick(){
        this.close.emit();
    }





}