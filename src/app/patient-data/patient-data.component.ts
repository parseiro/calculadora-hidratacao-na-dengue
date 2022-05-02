import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Dados do Paciente");
  }

}
