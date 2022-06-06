import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {IPatient} from "../model/patient";
import {SortDirection} from "@angular/material/sort";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  PATIENTS_URL = 'http://localhost:3000/pacientes';

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  public getPatientById(id: number): Observable<IPatient> {
    return this.http.get<IPatient>(`${this.PATIENTS_URL}/${id}`);
  }

  public getPatients(direction: SortDirection = 'asc',
                     sortColumn: string = 'id'): Observable<Array<IPatient>> {

    return this.http.get<IPatient[]>(`${this.PATIENTS_URL}?_order=${direction}`);
  }

  public save(patient: IPatient): Observable<IPatient> {
    return patient.id === 0
      ? this.http.post<IPatient>(this.PATIENTS_URL, patient)
      : this.http.put<IPatient>(`${this.PATIENTS_URL}/${patient.id}`, patient);
  }

  public deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.PATIENTS_URL}/${id}`);
  }
}
