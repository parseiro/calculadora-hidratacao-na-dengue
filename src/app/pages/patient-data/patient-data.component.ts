import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {
  idade: number = 0;
  peso: number = 0;

  constructor(private title: Title,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.paramMap.subscribe(
      params => {
        // @ts-ignore
        this.idade = +params.get('idade');
        // @ts-ignore
        this.peso = +params?.get('peso');
        // console.log(`idade: ${idade}, peso: ${peso}`);
      });
  }

  ngOnInit(): void {
    this.title.setTitle('Dados do paciente');
  }

  calculateVolume(): void {

    // const {idade, peso} = values;

    const url = `/calculatedVolume/idade/${this.idade}/peso/${this.peso}`;

    // console.log('Indo para: ' + url);

    this.router.navigate([url]);
  }

}
