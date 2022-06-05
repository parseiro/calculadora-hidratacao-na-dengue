import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {
  peso: number = 0;

  constructor(private title: Title,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.paramMap.subscribe(
      params => {
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
    let tipo: HTMLInputElement = <HTMLInputElement> document.getElementById('checkTipo');
    let comorbidades:HTMLInputElement = <HTMLInputElement> document.getElementById('checkComorbidades');

    //window.alert(`Tipo: ${tipo?.checked}, Comorbidade: ${comorbidades?.checked}`);

    if (tipo?.checked == false || comorbidades?.checked == false) {
      window.alert('Por favor, marque os checkboxes');
      return;
    }

    const url = `/patientView/peso/${this.peso}`;

    // console.log('Indo para: ' + url);

    this.router.navigate([url]);
  }

}
