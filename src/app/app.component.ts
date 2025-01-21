import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { RecentlyAvailableDatasetsComponent } from './components/recently-available-datasets/recently-available-datasets.component';
import { ActivityComponent } from './components/activity/activity.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    WelcomeBannerComponent,
    DatasetsComponent,
    RecentlyAvailableDatasetsComponent,
    ActivityComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'omnisient';
}
