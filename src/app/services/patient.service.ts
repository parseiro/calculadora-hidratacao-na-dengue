import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {IPatient} from "../model/patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  public createNewPatient(patient: IPatient): void {

  }

  /*public getPatientById(id: number): IPatient {

  }*/
}
