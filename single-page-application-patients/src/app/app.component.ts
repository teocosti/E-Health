import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailComponent } from './detail/detail.component';

export interface IPatient {
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  diagnosis_code: String,
  diagnosis_description: String,
  diagnosis_description_detailed: String,
  administered_drug_treatment: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  constructor(private dialog: MatDialog, private router: Router, private _httpClient: HttpClient) {
  }
  
  ngOnInit(): void {
    this.getPatients().subscribe((patientsData: IPatient[]) => this.patients = patientsData);
  }
  
  title = 'single-page-application-patients';
  public patients: IPatient[] = [];

  public getPatients(): Observable<IPatient[]> {
    return this._httpClient.get<IPatient[]>('https://alexgr.ro/ehealth/patients.json');
  }

  seeDetails(patient : IPatient): void {
    const dialogRef = this.dialog.open(DetailComponent, {
      data: patient
    })
  }

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'details'];
  dataSource = this.patients;
}
