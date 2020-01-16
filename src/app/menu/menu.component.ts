import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

  /**
   * Le menu peut être ouvert/ fermé.
   */
  isCollapsed: boolean = false; 

  /**
   * Le titre qui apparait au niveau du logo. 
   */
  @Input() title: string; 
  @Input() color: string; 

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  
  // On inverse la couleur du thème entre dark et light 
  
  switchTheme() {
    this.color = ('light' === this.color) ? 'dark' : 'light';
  }
    
}
