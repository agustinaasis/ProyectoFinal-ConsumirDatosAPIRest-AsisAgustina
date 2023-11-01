import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent {
  
  idControl = new FormControl();
  nameControl = new FormControl();
  lengthControl = new FormControl();

courseForm = new FormGroup ({

    id: this.idControl,
    name: this.nameControl,
    lenth: this.lengthControl,
  });

  constructor(private matDialogRef: MatDialogRef<CoursesDialogComponent> ) { }

  onSubmit(): void {
    if (this.courseForm.invalid) {
      return this.courseForm.markAllAsTouched();
    }else {
      this.matDialogRef.close(this.courseForm.value);
    }
  }

}
