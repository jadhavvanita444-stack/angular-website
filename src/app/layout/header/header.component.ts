import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   isOpen = false;

 menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
  document.body.classList.toggle('menu-open', this.menuOpen);
}

}

