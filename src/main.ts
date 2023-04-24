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
    <button pButton pRipple label="Submit" class="p-button-success" (click)="toggle($event)"></button>
    <p-overlayPanel #overlay [dismissable]="false" [showCloseIcon]="false" appendTo="body">
      <ng-template pTemplate="content">
        <h4>Custom Content</h4>
      </ng-template>
    </p-overlayPanel>
  `,
})
export class App {
  @ViewChild('overlay') private readonly overlay: OverlayPanel;

  toggle(event: any) {
    this.overlay.toggle(event);
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
