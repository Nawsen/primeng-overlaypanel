import 'zone.js/dist/zone';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, OverlayPanelModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <p-overlayPanel #overlay [dismissable]="false" [showCloseIcon]="false" [style]="{visibility: 'hidden'}" appendTo="body">
    </p-overlayPanel>
  `,
})
export class App {
  @ViewChild("overlay") private readonly overlay: OverlayPanel;
}

bootstrapApplication(App);
