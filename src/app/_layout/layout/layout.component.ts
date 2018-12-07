import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public loading = true;
  
  constructor(changeDetectorRef: ChangeDetectorRef, 
              media: MediaMatcher, 
              layoutService: LayoutService,
              private router: Router) {
    // detect desktop width
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
    // set global app name
    layoutService.appName = "Kickstarter";
  }
  
  // show preload when loading modules
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
          this.loading = true;
      } else if (event instanceof NavigationEnd || 
                event instanceof NavigationCancel) {
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
