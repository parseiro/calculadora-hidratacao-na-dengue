import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {IPatient} from "../../model/patient";
import {PatientService} from "../../services/patient.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {
  private activePatient: IPatient | undefined;
  public nome: string = '';
  public peso: number = 0;

  constructor(private title: Title,
              private router: Router,
              private patientService: PatientService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute) {

    this.route.paramMap.subscribe(
      params => {
        // @ts-ignore
        const id: number | undefined = +params?.get('id');

        // console.log(`Editando paciente com id ${id}`);

        if (id === 0) {
          this.activePatient = {
            id: 0,
            name: '',
            weight: 0
          };
          this.nome = '';
          this.peso = 0;

        } else {
          this.patientService.getPatientById(id)
            .subscribe({
              next: patient => {
                this.activePatient = patient;
                this.nome = patient.name;
                this.peso = patient.weight;
              },
              error: err => {
                this.activePatient = {
                  id: 0,
                  name: '',
                  weight: 0
                };
                this.nome = '';
                this.peso = 0;
              }
            });

        }
        // console.log(`idade: ${idade}, peso: ${peso}`);
      });
  }

  ngOnInit(): void {
    this.title.setTitle('Dados do paciente');
  }

  public savePatient(): void {
    // const {idade, peso} = values;
    let tipo: HTMLInputElement = <HTMLInputElement>document.getElementById('checkTipo');
    let comorbidades: HTMLInputElement = <HTMLInputElement>document.getElementById('checkComorbidades');

    //window.alert(`Tipo: ${tipo?.checked}, Comorbidade: ${comorbidades?.checked}`);

    if (tipo?.checked == false || comorbidades?.checked == false) {
      window.alert('Por favor, marque os checkboxes');
      return;
    }

    if (this.activePatient) {
      this.activePatient.name = this.nome;
      this.activePatient.weight = this.peso;
      this.patientService.save(this.activePatient)
        .subscribe({
            next: savedPatient => {
              this.snackBar.open(`Paciente criado ou editado: id ${savedPatient.id}`, '', {duration: 1000});

              const url = `/patientList`;

              // console.log('Indo para: ' + url);

              this.router.navigate([url]);
            },
            error: err => console.log(err)
          }
        );
    }
  }

}
