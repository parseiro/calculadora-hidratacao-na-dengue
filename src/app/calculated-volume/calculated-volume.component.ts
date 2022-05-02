import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-calculated-volume',
  templateUrl: './calculated-volume.component.html',
  styleUrls: ['./calculated-volume.component.scss']
})
export class CalculatedVolumeComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Volume calculado");
  }

}
