import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-name-dialog',
  templateUrl: './name-dialog.component.html',
  styleUrls: ['./name-dialog.component.scss']
})
export class NameDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
