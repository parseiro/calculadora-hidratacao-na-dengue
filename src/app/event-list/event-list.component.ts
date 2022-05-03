import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  eventos = [
    {
      id: 1,
      nome: 'Conferência Anual de Dengue',
      data: '25/9/2022'
    },
    {
      id: 2,
      nome: 'Conferência Nacional de Saúde',
      data: '25/3/2023'
    }
  ];

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Eventos");
  }

}
