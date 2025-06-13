import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  appointments = [
    {
      time: '09:00 AM',
      name: 'Juha Lahtinen – 240545-123Y',
      type: 'Etävastaanotto',
      message:
        'Hei tohtori, kiitos, että hyväksyitte tapaamisen. Tarvitsen apua...',
    },
    {
      time: '09:45 AM',
      name: 'Kaarina Mäkinen – 210637-963A',
      type: 'Etävastaanotto',
      message: '',
    },
    // Add more dummy appointments here
  ];

  recentPatients = [
    'Olavi Virtanen – 240545-123Y',
    'Juhani Korhonen – 010132-123Y',
    // Add more names
  ];
}
