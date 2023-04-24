import 'zone.js/dist/zone';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, OverlayPanelModule],
  template: `
    <button (click)="toggle($event)">toggle panel here</button>
    <p-overlayPanel #overlay [dismissable]="false" [showCloseIcon]="false" appendTo="body">
    Hello there
    </p-overlayPanel>
  `,
})
export class App {
  @ViewChild('overlay') private readonly overlay: OverlayPanel;

  toggle(event: any) {
    try {
      this.overlay.toggle(event);
    } catch (e) {
      // do nothing, primeng throws an error when closing popups with the close button
    }
  }
}

bootstrapApplication(App);
