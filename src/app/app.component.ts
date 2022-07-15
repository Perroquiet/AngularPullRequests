import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPullRequests';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "pr-open",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/pr-open.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "pr-open-draft",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/pr-open-draft.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "pr-closed",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/pr-closed.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "pr-merged",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/pr-merged.svg")
    );
  }
}
