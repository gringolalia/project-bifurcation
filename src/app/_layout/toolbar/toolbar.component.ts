import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../layout.service';
import { KeyboardShortcutsService } from 'ng-keyboard-shortcuts';
import { PrepareShortcuts } from '../../_shared/prepare-shortcuts.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [KeyboardShortcutsService]
})
export class ToolbarComponent implements OnInit, OnDestroy, PrepareShortcuts {

  @ViewChild('searchInput') searchInput: ElementRef;
  @Input() public mobileQuery: MediaQueryList;
  public appName: string;

  constructor(
    private layoutService: LayoutService,
    private router: Router,
    private keyboard: KeyboardShortcutsService) { }

  ngOnInit(): void {
    this.appName = this.layoutService.appName;
    this.prepareShortcuts();
  }

  prepareShortcuts(): void {
    this.keyboard.add([
      {
        key: '`',
        command: () => this.toggleSidenav(),
        preventDefault: true,
        description: 'Open/close left navigation menu'
      }
    ]);

    this.keyboard.add([
      {
        key: 'ctrl f',
        command: () => this.searchInput.nativeElement.focus(),
        preventDefault: true,
        description: 'Focus to search input'
      }
    ]);

    this.keyboard.add([
      {
        key: 'shift + /',
        command: () => this.router.navigate(['/help/shortcuts']),
        preventDefault: true,
        description: 'Open shortcuts page'
      }
    ]);

    this.keyboard.add([
      {
        key: 'shift p',
        command: () => this.router.navigate(['/profile']),
        preventDefault: true,
        description: 'Open profile page'
      }
    ]);

    this.keyboard.add([
      {
        key: 'shift s',
        command: () => this.router.navigate(['/settings']),
        preventDefault: true,
        description: 'Open settings page'
      }
    ]);

    this.keyboard.add([
      {
        key: 'shift h',
        command: () => this.router.navigate(['/help']),
        preventDefault: true,
        description: 'Open help page'
      }
    ]);

    this.keyboard.add([
      {
        key: 'shift f',
        command: () => this.router.navigate(['/feedback']),
        preventDefault: true,
        description: 'Open feedback page'
      }
    ]);
  }

  public toggleSidenav(): void {
    this.layoutService.toggleSidenav();
  }

  public search(text: string): void {
    this.router.navigate(['/search'], {
      queryParams: {
        search_query : text.trim()
      }
    });
  }

  ngOnDestroy(): void { }
}
