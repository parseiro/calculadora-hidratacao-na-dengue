import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {IPatient} from "../../model/patient";
import {PatientService} from "../../services/patient.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-calculated-volume',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {

  public patient$?: Observable<IPatient>;

  manhaTotal: number = 0;
  manhaSro: number = 0;
  manhaOutros: number = 0;

  tardeSro: number = 0;
  tardeOutros: number = 0;
  tardeTotal: number = 0;

  noiteSro: number = 0;
  noiteOutros: number = 0;
  noiteTotal: number = 0;

  sroTotal: number = 0;
  outrosTotal: number = 0;

  constructor(private title: Title,
              private router: Router,
              private patientService: PatientService,
              private route: ActivatedRoute) {

    this.route.paramMap.subscribe(
      params => {
        // @ts-ignore
        const id = +params.get('id');

        this.patient$ = this.patientService.getPatientById(id)
          .pipe(
            tap(value => this.calcularHidratacao(value.weight))
          );
        //this.calcularHidratacao(patient.weight);
      });

  }

  ngOnInit(): void {
    this.title.setTitle("Ver paciente");
  }

  backToEditor(id: number) {
    const url = `/patientEdit/${id}`;

    // console.log('Indo para: ' + url);

    this.router.navigate([url]);
  }

  calcularHidratacao(peso: number) {
    const total: number = 60 * peso;

    this.manhaTotal = total * 0.5;
    this.manhaSro = 1 / 3 * this.manhaTotal;
    this.manhaOutros = this.manhaTotal - this.manhaSro;

    this.tardeTotal = total * 0.35;
    this.tardeSro = 1 / 3 * this.tardeTotal;
    this.tardeOutros = this.tardeTotal - this.tardeSro;

    this.noiteTotal = total * 0.15;
    this.noiteSro = 1 / 3 * this.noiteTotal;
    this.noiteOutros = this.noiteTotal - this.noiteSro;

    this.sroTotal = this.manhaSro + this.tardeSro + this.noiteSro;
    this.outrosTotal = this.manhaOutros + this.tardeOutros + this.noiteOutros;
  }

}
