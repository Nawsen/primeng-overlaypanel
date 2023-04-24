import 'zone.js/dist/zone';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, OverlayPanelModule, ButtonModule],
  template: `
    <button pButton pRipple label="toggle" class="p-button-success" (click)="toggle($event)"></button>
    <p-overlayPanel #overlay [dismissable]="false" [showCloseIcon]="false" appendTo="body">
      <ng-template pTemplate="content">
        <h4>Custom Content</h4>
        <button pButton label="custom toggle button" (click)="toggle($event)"></button>
        <button pButton label="custom close button" (click)="close($event)"></button>
      </ng-template>
    </p-overlayPanel>
  `,
})
export class App {
  @ViewChild('overlay') private readonly overlay: OverlayPanel;

  toggle(event: any) {
    this.overlay.toggle(event);
  }

  close(event: any) {
    this.overlay.hide();
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
