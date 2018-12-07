import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class LayoutService {
  private _appName: string;
  private sidenav: MatSidenav;

  /**
   * Global app names
   * set it in layout.component
   */
  set appName(name: string) { 
    this._appName = name && name.trim(); 
  }
  
  get appName(): string { 
    return this._appName || '<no name set>'; 
  }

  /**
   * Sidenav control
   */
  public setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
    this.sidenav.autoFocus = false;
  }

  public toggleSidenav(): void {
    this.sidenav.toggle();
  }

  public openSidenav(): void {
    this.sidenav.open();
  }

  public closeSidenav(): void {
    this.sidenav.close();
  }
}