import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { ShortcutElement } from './shortcut-element.interface';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.css']
})
export class ShortcutsComponent {

  /**
   * actions
   */
  actions_data: ShortcutElement[] = [
    { command: 'Open/close left navigation menu', keybinding: '~ or `' },
    { command: 'Search', keybinding: 'Ctrl + F' },
  ];
  actions_columns: string[] = ['command', 'keybinding'];
  actions_dataSource = new MatTableDataSource(this.actions_data);

  /**
   * navigation
   */
  navigation_data: ShortcutElement[] = [
    { command: 'Shortcuts', keybinding: '? or ⇧ Shift + /' },
    { command: 'Profile', keybinding: '⇧ Shift + P' },
    { command: 'Settings', keybinding: '⇧ Shift + S' },
    { command: 'Help', keybinding: '⇧ Shift + H' },
    { command: 'Feedback', keybinding: '⇧ Shift + F' },
  ];
  navigation_columns: string[] = ['command', 'keybinding'];
  navigation_dataSource = new MatTableDataSource(this.navigation_data);
}
