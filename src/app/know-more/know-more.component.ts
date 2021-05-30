import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.scss']
})
export class KnowMoreComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<KnowMoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log("Data",this.data)
  }
  
}
