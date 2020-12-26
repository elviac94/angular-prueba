import { Component } from '@angular/core';
import cowlist from '../assets/infor/datos.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  selectedCow = null;
  open = false;
  cows: any = cowlist.map(item => ({
    ...item,
    img: item.sex === 'FEMALE' ? './assets/icons/cow.svg' : './assets/icons/bull.svg'
  }));


  onSelectCow(cow) {
    this.selectedCow = cow;
    this.open=true;
  }

  onClosedModal() {
    this.selectedCow = null;
    this.open=false;
  }
}
