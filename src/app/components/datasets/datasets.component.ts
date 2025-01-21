import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-datasets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datasets.component.html',
  styleUrl: './datasets.component.scss',
})
export class DatasetsComponent implements OnInit {
  datasets: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPendingReviewDatasets().subscribe((data) => {
      this.datasets = data;
    });
  }
}
