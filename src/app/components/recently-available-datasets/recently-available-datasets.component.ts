import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recently-available-datasets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recently-available-datasets.component.html',
  styleUrls: ['./recently-available-datasets.component.scss'],
})
export class RecentlyAvailableDatasetsComponent implements OnInit {
  recentlyAvailableDatasets: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getRecentlyAvailableDatasets().subscribe((data) => {
      this.recentlyAvailableDatasets = data;
    });
  }
}
