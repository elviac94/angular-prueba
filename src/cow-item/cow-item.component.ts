import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'cow-item',
    templateUrl: './cow-item.component.html',
    styleUrls: ['./cow-item.component.scss']
})
export class CowItemComponent {
    @Input() cow;
    @Output() select = new EventEmitter();

    onClick(cow){
        this.select.emit(cow);
    }
}