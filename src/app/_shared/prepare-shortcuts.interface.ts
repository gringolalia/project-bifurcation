export interface PrepareShortcuts {
    /**
     * Create instance of KeyboardShortcutsService and add all new shortcuts in method below.
     * After prepare all shortcuts, call this method in OnInit method of component.
     * NOTE: Do not forget implement OnDestroy method for cleanup.
     */
    prepareShortcuts(): void;
}