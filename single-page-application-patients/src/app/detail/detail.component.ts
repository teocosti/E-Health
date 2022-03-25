import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import { IPatient } from '../app.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<DetailComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }

  ngOnInit(): void {
  }

  public  closeDetails() {
    this.dialogRef.close();
  }

}
