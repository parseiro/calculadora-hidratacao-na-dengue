import {Injectable} from '@angular/core';
import {IPatient} from "../model/patient";
import {SortDirection} from "@angular/material/sort";
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor() {
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

  public save(activePatient: IPatient): Observable<IPatient> {
    return this.getPatients().pipe(
      map((patients) => {
        if (activePatient.id === 0) { // new patient
          if (patients.length === 0) {
            activePatient.id = 1;
          } else {
            activePatient.id = patients[0].id + 1;
          }
          patients.push(activePatient);
        } else { // edit existing patient
          patients.filter(value => value.id === activePatient.id)
            .forEach((value) => {
              value.name = activePatient.name;
              value.weight = activePatient.weight;
            });
        }

        localStorage.setItem('patients', JSON.stringify(patients));
        return activePatient;
      }));
  }

  public deleteById(id: number): Observable<void> {
    return this.getPatients().pipe(
      map((patients) => {
        const newPatients = patients.filter(patient => patient.id !== id);
        localStorage.setItem('patients', JSON.stringify(newPatients));
        return;
      }));
  }
}
