import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LayoutService } from '../layout.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() mobileQuery: MediaQueryList;
  @ViewChild('sidenav') sidenav: MatSidenav;
  public appName: string;

  constructor(
    private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.setSidenav(this.sidenav);
    this.appName = this.layoutService.appName;
  }

  // close sidenav after click in mobile view
  closeSideNav(): void { 
    if (this.mobileQuery.matches) {
      this.layoutService.closeSidenav();
    }
  }
}
