import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IPatient} from "../../model/patient";
import {PatientService} from "../../services/patient.service";
import {MatSort} from "@angular/material/sort";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";

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
    this.patientService.deleteById(id);
    this.loadPatients();
  }
}
