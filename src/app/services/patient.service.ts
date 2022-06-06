import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {IPatient} from "../model/patient";
import {SortDirection} from "@angular/material/sort";
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  public createNewPatient(patient: IPatient): void {

  }

  public getPatientById(id: number): Observable<IPatient> {
    return this.getPatients()
      .pipe(
        map((all) => all.filter(patient => patient.id === id)[0])
      );
  }

  public getPatients(direction: SortDirection = 'asc',
                     sortColumn: string = 'id'): Observable<Array<IPatient>> {
    const usersString: string | null = localStorage.getItem('patients');

    if (usersString == null) {
      return of([]);
    }

    let patientsArray: Array<IPatient> = JSON.parse(usersString);

    if (direction === 'desc') {
      // console.log('descendente');
      patientsArray = patientsArray.sort((a, b) => b.id - a.id);
    } else {
      // console.log('ascendente');
      patientsArray = patientsArray.sort((a, b) => a.id - b.id);
    }

    return of(patientsArray);
  }

  public save(activePatient: IPatient): void {
    this.getPatients()
      .subscribe({
        next: (patients) => {
          if (activePatient.id === 0) { // new patient
            if (patients.length === 0) {
              activePatient.id = 1;
            } else {
              activePatient.id = patients[0].id + 1;
            }
            patients.push(activePatient);
          } else { // edit existing patient
            patients.filter(value => value.id === activePatient.id)
              .forEach((value, index) => {
                value.name = activePatient.name;
                value.weight = activePatient.weight;
              });
          }

          localStorage.setItem('patients', JSON.stringify(patients));

          this.snackBar.open(`Paciente salvo: id ${activePatient.id}`, '', {duration: 1000});
      }});
  }

  public deleteById(id: number): void {
    this.getPatients()
      .subscribe({
        next: (patients)  => {
          patients = patients.filter(patient => patient.id !== id);

          localStorage.setItem('patients', JSON.stringify(patients));

          this.snackBar.open(`Paciente excluído: id ${id}`, '', {duration: 1000});
        }
      });
  }
}
