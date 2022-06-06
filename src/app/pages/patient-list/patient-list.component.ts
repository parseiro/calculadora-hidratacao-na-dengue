import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {IPatient} from "../../model/patient";
import {PatientService} from "../../services/patient.service";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit, AfterViewInit {
  public patients$?: Observable<IPatient[]>;
  public displayedColumns = ['id', 'name', 'weight', 'actions'];

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private patientService: PatientService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  ngAfterViewInit(): void {
    this.sort.sortChange
      .pipe(
        tap(() => this.loadPatients())
      )
      .subscribe();
  }

  private loadPatients() {
    this.patients$ = this.patientService.getPatients(
      this.sort?.direction ?? 'asc',
      this.sort?.active ?? 'id'
      );
  }

  public ver(id: number): void {
    const url = `/patientView/${id}`;

    this.router.navigate([url]);
  }

  public editar(id: number): void {
    // console.log(`Editar: ${id}`);

    const url = `/patientEdit/${id}`;

    this.router.navigate([url]);
  }

  public deletar(id: number): void {
    this.patientService.deleteById(id).subscribe({
        next: value => {
          this.snackBar.open(`Paciente excluído: id ${id}`, '', {duration: 2000});
          this.loadPatients();
        },
        error: (err) => {
          this.snackBar.open(`Erro: ${err.status} ${err.statusText}`, '', {duration: 5000});
          console.log(err);
        }
      });
    this.loadPatients();
  }
}
