import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title,
  private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle("Sobre");

    this.meta.updateTag({name: "description", content: "Sobre"});

    this.meta.addTag({name: 'twitter:card', content: 'summary'});
    this.meta.addTag({name: 'twitter:site', content: '@leopinheiro'});
    this.meta.addTag({name: 'twitter:title', content: 'Sobre a calculadora de hidratação na dengue'});
    // this.meta.addTag({name: 'twitter:description', content: 'summary'});
    // this.meta.addTag({name: 'twitter:text:description', content: 'summary'});
    // this.meta.addTag({name: 'twitter:image', content: 'summary'});
  }

}
