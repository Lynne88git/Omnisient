import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { DatasetsComponent } from './components/datasets/datasets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, WelcomeBannerComponent, DatasetsComponent],
  template: ` <app-header /> <app-welcome-banner /> <app-datasets />`,
  styles: [],
})
export class AppComponent {
  title = 'omnisient';
}
